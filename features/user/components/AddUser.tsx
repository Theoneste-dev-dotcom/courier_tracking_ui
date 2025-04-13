import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorText from "../../../components/Typography/ErrorText";
import { showNotification } from "../../common/headerSlice";
import { addNewLead } from "../leadSlice";
import InputText from "@/components/Input/InputText";
import axios from "axios";
import { selectCompanyId } from "@/features/welcome/welcomeSlice";
import { useRouter } from "next/navigation";

const INITIAL_USER_OBJ = {
  name: "",
  password: "",
  email: "",
  role: "",
  phone: "",
};

function AddUser({ closeModal }: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user_local = localStorage.getItem('user')
  const {currentId}= JSON.parse(user_local ? user_local : "undefined")
  const companyId = localStorage.getItem('current-company-id')
  
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userObj, setUserObj] = useState(INITIAL_USER_OBJ);

  const saveNewUser = async () => {
    if (userObj.name.trim() === "")
      return setErrorMessage("Driver Name is required!");
    else if (userObj.email.trim() === "")
      return setErrorMessage("Driver Email  is required!");
    else if (userObj.name.trim() === "")
      return setErrorMessage("Driver Name is required!");
    else if (userObj.email.trim() === "")
      return setErrorMessage("Driver Email is required!");
    else if (userObj.phone.trim() === "")
      return setErrorMessage("Driver Phone is required!");
    else {
      const res = await axios.post(`http://localhost:3001/users?companyId=${companyId}&currentId=${currentId}`, driverObj, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res);
      alert("driver is saved")
      // dispatch(addNewLead({driverObj}))
      // dispatch(showNotification({message : "New Driver Added!", status : 1}))
      closeModal();
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
        labelTitle="User Name"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="text"
        defaultValue={userObj.email}
        updateType="email"
        containerStyle="mt-4"
        labelTitle="User Email"
        updateFormValue={updateFormValue}
      />
      <InputText
        type="text"
        defaultValue={userObj.password}
        updateType="password"
        containerStyle="mt-4"
        labelTitle="User Login Passsword"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="email"
        defaultValue={userObj.phone}
        updateType="phone"
        containerStyle="mt-4"
        labelTitle="Driver Phone Number"
        updateFormValue={updateFormValue}
      />
     

      <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
      <div className="modal-action">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary px-6" onClick={() => saveNewUser()}>
          Save
        </button>
      </div>
    </>
  );
}

export default AddUser;
