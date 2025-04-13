import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorText from "../../../components/Typography/ErrorText";
import { showNotification } from "../../common/headerSlice";
import { addNewLead } from "../leadSlice";
import InputText from "@/components/Input/InputText";
import axios from "axios";
import { selectCompanyId } from "@/features/welcome/welcomeSlice";
import { useRouter } from "next/navigation";

const INITIAL_OFFICER_OBJ = {
  name: "",
  password: "",
  email: "",
  role: "",
  phone: "",
};

function AddOfficerModalBody({ closeModal }: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user_local = localStorage.getItem('user')
  const {currentId}= JSON.parse(user_local ? user_local : "undefined")
  const companyId = localStorage.getItem('current-company-id')
  
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [officerObj, setofficerObj] = useState(INITIAL_OFFICER_OBJ);

  const saveNewOfficer = async () => {
    if (officerObj.name.trim() === "")
      return setErrorMessage("Officer Name is required!");
    else if (officerObj.email.trim() === "")
      return setErrorMessage("Officer Email  is required!");
    else if (officerObj.name.trim() === "")
      return setErrorMessage("Officer Name is required!");
    else if (officerObj.email.trim() === "")
      return setErrorMessage("Officer Email is required!");
    else if (officerObj.phone.trim() === "")
      return setErrorMessage("Officer Phone is required!");
    else {
      const res = await axios.post(`http://localhost:3001/users?companyId=${companyId}&currentId=${currentId}`, officerObj, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res);
      // dispatch(addNewLead({officerObj}))
      // dispatch(showNotification({message : "New Officer Added!", status : 1}))
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
    setofficerObj({ ...officerObj, [updateType]: value });
  };

  return (
    <>
      <InputText
        type="text"
        defaultValue={officerObj.name}
        updateType="name"
        containerStyle="mt-4"
        labelTitle="Officer Name"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="text"
        defaultValue={officerObj.email}
        updateType="email"
        containerStyle="mt-4"
        labelTitle="Brach Email"
        updateFormValue={updateFormValue}
      />
      <InputText
        type="text"
        defaultValue={officerObj.password}
        updateType="password"
        containerStyle="mt-4"
        labelTitle="Officer Login Passsword"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="email"
        defaultValue={officerObj.phone}
        updateType="phone"
        containerStyle="mt-4"
        labelTitle="Officer Phone Number"
        updateFormValue={updateFormValue}
      />
     

      <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
      <div className="modal-action">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary px-6" onClick={() => saveNewOfficer()}>
          Save
        </button>
      </div>
    </>
  );
}

export default AddOfficerModalBody;
