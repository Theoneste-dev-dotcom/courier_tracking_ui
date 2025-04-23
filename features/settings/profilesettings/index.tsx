import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

// Components
import TitleCard from "../../../components/Input/Cards/TitleCard";
import TextAreaInput from "../../../components/Input/TextAreaInput";
import ToogleInput from "../../../components/Input/ToogleInput";
import InputText from "@/components/Input/InputText";
import { showNotification } from "../../common/headerSlice";

// Assets
import profile from "@/public/profile.png";

// Types
interface UserProfile {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  about?: string;
  address?: string;
  imagePath?: string;
}

interface FormField {
  updateType: keyof UserProfile;
  labelTitle: string;
  defaultValue: string;
  component: 'InputText' | 'TextAreaInput' | 'ToogleInput';
  options?: any;
}

const ProfileSettings = () => {
  // State Management
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [userData, setUserData] = useState<Partial<UserProfile>>({});
  const [profileImage, setProfileImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  // Get user ID from localStorage
  const user_local = localStorage.getItem("user");
  const { id } = user_local ? JSON.parse(user_local) : { id: null };

  // Form Configuration
  const personalInfoFields: FormField[] = [
    { updateType: 'name', labelTitle: 'Name', defaultValue: '', component: 'InputText' },
    { updateType: 'email', labelTitle: 'Email Id', defaultValue: '', component: 'InputText' },
    { updateType: 'role', labelTitle: 'Title', defaultValue: '', component: 'InputText' },
    { updateType: 'address', labelTitle: 'Place', defaultValue: '', component: 'InputText' },
    { updateType: 'about', labelTitle: 'About', defaultValue: '', component: 'TextAreaInput' },
    { updateType: 'phone', labelTitle: 'Telephone Number', defaultValue: '', component: 'InputText' },
  ];

  const preferenceFields: FormField[] = [
    { updateType: 'langauage', labelTitle: 'Language', defaultValue: 'English', component: 'InputText' },
    { updateType: 'timezone', labelTitle: 'Timezone', defaultValue: 'IST', component: 'InputText' },
    { updateType: 'syncData', labelTitle: 'Sync Data', defaultValue: 'true', component: 'ToogleInput' },
  ];

  // Data Fetching
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const [userResponse, imageResponse] = await Promise.all([
        axios.get(`http://localhost:3001/users/specific/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }),
        axios.get(`http://localhost:3001/users/profile/image`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
      ]);

      if (userResponse.data) {
        setCurrentUser(userResponse.data);
        setUserData(userResponse.data);
      }

      if (imageResponse.data?.imageUrl) {
        setProfileImage(imageResponse.data.imageUrl);
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      dispatch(showNotification({ message: "Failed to load profile data", status: 0 }));
    } finally {
      setIsLoading(false);
    }
  };

  // Form Handling
  const updateFormValue = ({ updateType, value }: { updateType: keyof UserProfile; value: string }) => {
    setUserData(prev => ({ ...prev, [updateType]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
        setUserData(prev => ({ ...prev, imageFile: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      
      // Append all user data fields
      Object.entries(userData).forEach(([key, value]) => {
        if (value !== undefined && key !== 'imageFile') {
          formData.append(key, value.toString());
        }
      });

      // Append image file if exists
      if (userData.imageFile) {
        formData.append('profilePic', userData.imageFile);
      }

      const response = await axios.put(
        `http://localhost:3001/users/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data) {
        dispatch(showNotification({ message: "Profile Updated Successfully!", status: 1 }));
        const updatedUser = { ...JSON.parse(user_local || "{}"), ...response.data };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        fetchUserData();
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      dispatch(showNotification({ message: "Failed to update profile", status: 0 }));
    }
  };

  // Effects
  useEffect(() => {
    if (id) {
      fetchUserData();
    }
  }, [id]);

  // Render Components
  const renderFormField = (field: FormField) => {
    const commonProps = {
      updateType: field.updateType,
      labelTitle: field.labelTitle,
      defaultValue: currentUser?.[field.updateType] || field.defaultValue,
      updateFormValue,
      ...field.options,
    };

    switch (field.component) {
      case 'InputText':
        return <InputText key={field.updateType} {...commonProps} />;
      case 'TextAreaInput':
        return <TextAreaInput key={field.updateType} {...commonProps} />;
      case 'ToogleInput':
        return <ToogleInput key={field.updateType} {...commonProps} />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading profile...</div>;
  }

  if (!currentUser) {
    return <div className="text-center py-8">No user data available</div>;
  }

  return (
    <TitleCard title="Profile Settings" topMargin="mt-2">
      {/* Profile Image Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative h-40 w-40 group">
          <Image
            src={profileImage || profile}
            alt="Profile Image"
            className="rounded-full object-cover h-full w-full border-2 border-gray-200"
            width={160}
            height={160}
          />
          
          {/* Image Upload Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-full">
            <label className="cursor-pointer p-3 bg-teal-700 rounded-full hover:bg-teal-600 transition-colors">
              <ImageIcon className="text-white" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {currentUser.imagePath || "profile.png"}
        </p>
      </div>

      {/* Personal Information Section */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalInfoFields.map(renderFormField)}
        </div>
      </section>

      <div className="divider"></div>

      {/* Preferences Section */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {preferenceFields.map(renderFormField)}
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex justify-end mt-8">
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Profile'}
        </button>
      </div>
    </TitleCard>
  );
};

export default ProfileSettings;