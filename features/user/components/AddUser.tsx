import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorText from "../../../components/Typography/ErrorText";
import { showNotification } from "../../common/headerSlice";
// import { addNewLead } from "../leadSlice";
import InputText from "@/components/Input/InputText";
import axios from "axios";
import { selectCompanyId } from "@/features/welcome/welcomeSlice";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const INITIAL_USER_OBJ = {
  name: "",
  password: "",
  email: "",
  role: "",
  phone: "",
  vehicleId: "",
};

function AddUser({ closeModal }: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user_local = localStorage.getItem("user");
  const { id } = JSON.parse(user_local ? user_local : "undefined");
  const companyId = localStorage.getItem("current-company-id");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userObj, setUserObj] = useState(INITIAL_USER_OBJ);

  const [showPassword, setShowPassword] = useState(false);

  const { title } = useSelector((state) => state.modal);

  const saveNewUser = async () => {
    if (title == "Add New Driver") {
      userObj.role = "driver";
    } else if (title == "Add New Officer") {
      userObj.role = "officer";
    } else if (title == "Add New Admin") {
      userObj.role = "admin";
    }
    if (userObj.name.trim() === "") return setErrorMessage("Name is required!");
    else if (userObj.email.trim() === "")
      return setErrorMessage(" Email  is required!");
    else if (userObj.name.trim() === "")
      return setErrorMessage(" Name is required!");
    else if (userObj.role.trim() === "")
      return setErrorMessage("Role is required!");
    else if (userObj.phone.trim() === "")
      return setErrorMessage("Phone is required!");
    else if (title == "Add New Driver" && userObj.vehicleId.trim() === "") {
      return setErrorMessage("Car plate can't be empty");
    } else {
      switch (title) {
        case "Add new Officer":
          userObj.role = "officer";
          break;
        case "Add new Driver":
          userObj.role = "driver";
          break;
        case "Add new Admin":
          userObj.role = "admin";
          break;
      }

      console.log(companyId, id);
      const res = await axios.post(
        `http://localhost:3001/users?companyId=${companyId}&currentId=${id}`,
        userObj,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res.data);
      // dispatch(addNewLead({driverObj}))
      // dispatch(showNotification({message : "New Driver Added!", status : 1}))
      closeModal();
      location.reload();
    }
  };

  const updateFormValue = ({
    updateType,
    value,
  }: {
    updateType: string;
    value: string;
  }) => {
    setErrorMessage("");
    setUserObj({ ...userObj, [updateType]: value });
  };

  return (
    <>
      <InputText
        type="text"
        defaultValue={userObj.name}
        updateType="name"
        containerStyle="mt-4"
        labelTitle="Name"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="text"
        defaultValue={userObj.email}
        updateType="email"
        containerStyle="mt-4"
        labelTitle="Email"
        updateFormValue={updateFormValue}
      />

      <div className="relative">
        <InputText
          defaultValue={userObj.password}
          type={showPassword ? "text" : "password"}
          updateType="password"
          containerStyle="mt-4"
          labelTitle="Password"
          updateFormValue={updateFormValue}
        />

        <button
          type="button"
          className="absolute md:right-4 right-4 md:top-2/3 top-2/3 transform -translate-y-1/2 text-gray-600"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <InputText
        type="email"
        defaultValue={userObj.phone}
        updateType="phone"
        containerStyle="mt-4"
        labelTitle="Phone Number"
        updateFormValue={updateFormValue}
      />

      {title == "Add New Driver" && (
        <InputText
          type="text"
          defaultValue={userObj.vehicleId}
          updateType="vehicleId"
          containerStyle="mt-4"
          labelTitle="Vehicle plate"
          updateFormValue={updateFormValue}
        />
      )}

      <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
      <div className="modal-action">
        <button
          className="btn btn-danger text-red-500"
          onClick={() => closeModal()}
        >
          Cancel
        </button>
        <button className="btn btn-primary px-6" onClick={() => saveNewUser()}>
          Save
        </button>
      </div>
    </>
  );
}

export default AddUser