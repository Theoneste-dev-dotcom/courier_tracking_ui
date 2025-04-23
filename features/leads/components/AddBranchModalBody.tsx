import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorText from "../../../components/Typography/ErrorText";
import { showNotification } from "../../common/headerSlice";
import { addNewLead } from "../leadSlice";
import InputText from "@/components/Input/InputText";
import axios from "axios";
import { selectCompanyId } from "@/features/welcome/welcomeSlice";
import { useRouter } from "next/navigation";

const INITIAL_BRANCH_OBJ = {
  name: "",
  location: "",
  email: "",
  manager_name: "",
  phone_number: "",
  companyId: "",
};

function AddLeadModalBody({ closeModal }: any) {
  const current_companyId = localStorage.getItem("current-company-id");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [branchObj, setBranchObj] = useState(INITIAL_BRANCH_OBJ);

  const saveNewBranch = async () => {
    if (branchObj.name.trim() === "")
      return setErrorMessage("Branch Name is required!");
    else if (branchObj.email.trim() === "")
      return setErrorMessage("Branch Email  is required!");
    else if (branchObj.location.trim() === "")
      return setErrorMessage("Branch Location is required!");
    else if (branchObj.manager_name.trim() === "")
      return setErrorMessage("Branch Manager is required!");
    else if (branchObj.phone_number.trim() === "")
      return setErrorMessage("Branch Phone is required!");
    else {
      branchObj.companyId = current_companyId ?? "";

      //    console.log(branchObj, current_companyId)
      const res = await axios.post(
        "http://localhost:3001/branches",
        branchObj,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res);
      // dispatch(addNewLead({branchObj}))
      // dispatch(showNotification({message : "New Branch Added!", status : 1}))
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
    setBranchObj({ ...branchObj, [updateType]: value });
  };

  return (
    <>
      <InputText
        type="text"
        defaultValue={branchObj.name}
        updateType="name"
        containerStyle="mt-4"
        labelTitle="Branch Name"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="text"
        defaultValue={branchObj.email}
        updateType="email"
        containerStyle="mt-4"
        labelTitle="Brach Email"
        updateFormValue={updateFormValue}
      />
      <InputText
        type="text"
        defaultValue={branchObj.manager_name}
        updateType="manager_name"
        containerStyle="mt-4"
        labelTitle="Brach Manager Name"
        updateFormValue={updateFormValue}
      />

      <InputText
        type="email"
        defaultValue={branchObj.phone_number}
        updateType="phone_number"
        containerStyle="mt-4"
        labelTitle="Branch Phone Number"
        updateFormValue={updateFormValue}
      />
      <InputText
        type="text"
        defaultValue={branchObj.location}
        updateType="location"
        containerStyle="mt-4"
        labelTitle="Branch Location"
        updateFormValue={updateFormValue}
      />

      <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
      <div className="modal-action">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Cancel
        </button>
        <button
          className="btn btn-primary px-6"
          onClick={() => saveNewBranch()}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default AddLeadModalBody;
