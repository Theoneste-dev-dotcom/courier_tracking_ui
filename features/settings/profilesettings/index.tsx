import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Input/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";
import TextAreaInput from "../../../components/Input/TextAreaInput";
import ToogleInput from "../../../components/Input/ToogleInput";
import InputText from "@/components/Input/InputText";
import axios from "axios";
import profile from "@/public/profile.png";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { BiSelection } from "react-icons/bi";
import { Input } from "postcss";

interface CurrentUserType {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  about?: string;
  address?: string;
  imagePath?: string
}

function ProfileSettings() {
  const dispatch = useDispatch();
  const user_local = localStorage.getItem("user");
  const { id } = JSON.parse(user_local ? user_local : "undefined");
  const [currentUser, setCurrentUser] = useState<CurrentUserType>();
  const [userData, setUserData] = useState<CurrentUserType>();

  const fetchCurrentUser = async () => {
    const user = await axios.get(`http://localhost:3001/users/specific/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (user) {
      // console.log(user.data)
      setCurrentUser(user.data);
      setUserData(user.data);
    } else {
      console.log("failed to get user");
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);
  // Call API to update profile settings changes
  const updateProfile = async () => {
    alert(userData?.imagePath)
    // const res = await axios.put(`http://localhost:3001/users/${id}`, userData, {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // });
    // if (res) {
    //   console.log(res.data);
    // }
    // location.reload();
    // dispatch(showNotification({ message: "Profile Updated", status: 1 }));
  };

  const updateFormValue = ({
    updateType,
    value,
  }: {
    updateType: string;
    value: string;
  }) => {
    setUserData({ ...userData, [updateType]: value });
  };

  // console.log("curr ",currentUser)

  if (!currentUser) {
    return (
      <div>
        <h1>No User</h1>
      </div>
    );
  }

  return (
    <>
      <TitleCard title="Profile Settings" topMargin="mt-2">
        <div className="text-base-content font-bold font-sans text-xl relative">
          <Image
            src={profile}
            alt="profile Image"
            className="rounded-full object-fit-cover h-40 w-40"
          />

          <div className="bg-teal-950 rounded-full absolute bottom-0 left-28 p-3" title="Choose an Image">
            <ImageIcon className=" z-100 " />
            <InputText type="file" defaultValue={currentUser?.imagePath || ""}  updateType="imagePath" labelTitle="image" updateFormValue={updateFormValue}/>
          </div>
        </div>
        
        <h4>{currentUser.imagePath? currentUser.imagePath : "profile.png"}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            updateType="name"
            labelTitle="Name"
            defaultValue={currentUser?.name || ""}
            updateFormValue={updateFormValue}
          />
          <InputText
            updateType="email"
            labelTitle="Email Id"
            defaultValue={currentUser?.email || ""}
            updateFormValue={updateFormValue}
          />
          <InputText
            updateType="title"
            labelTitle="Title"
            defaultValue={currentUser.role || ""}
            updateFormValue={updateFormValue}
          />
          <InputText
            updateType="address"
            labelTitle="Place"
            defaultValue={currentUser.address || ""}
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            updateType="about"
            labelTitle="About"
            defaultValue={currentUser.about || ""}
            updateFormValue={updateFormValue}
          />
          <InputText
            updateType="phone"
            labelTitle="Telephone Number"
            defaultValue={currentUser.phone || ""}
            updateFormValue={updateFormValue}
          />
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            updateType="langauage"
            labelTitle="Language"
            defaultValue="English"
            updateFormValue={updateFormValue}
          />
          <InputText
            updateType="timezone"
            labelTitle="Timezone"
            defaultValue="IST"
            updateFormValue={updateFormValue}
          />
          <ToogleInput
            updateType="syncData"
            labelTitle="Sync Data"
            defaultValue={true}
            updateFormValue={updateFormValue}
          />
        </div>

        <div className="mt-16">
          <button
            className="btn btn-primary float-right"
            onClick={updateProfile}
          >
            Update
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;
