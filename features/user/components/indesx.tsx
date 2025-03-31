'use client'

import InputText from "@/components/Input/InputText";
import ErrorText from "@/components/Typography/ErrorText";
import { useState } from "react";


const AddUserForm = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    vehicle_number: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const updateFormValue = (updateType, value) => {
    setUserData((prev) => ({ ...prev, [updateType]: value }));
  };

  const handleSave = () => {
    if (!userData.first_name || !userData.last_name || !userData.email || !userData.phone) {
      setErrorMessage("All fields are required.");
      return;
    }
  };

  return (
    <div className="p-6 bg-base-100 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold text-primary">Add New User/Driver</h2>

      <InputText type="text" defaultValue={userData.first_name} updateType="first_name" containerStyle="mt-4" labelTitle="First Name" updateFormValue={updateFormValue} />

      <InputText type="text" defaultValue={userData.last_name} updateType="last_name" containerStyle="mt-4" labelTitle="Last Name" updateFormValue={updateFormValue} />

      <InputText type="email" defaultValue={userData.email} updateType="email" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue} />

      <InputText type="text" defaultValue={userData.phone} updateType="phone" containerStyle="mt-4" labelTitle="Phone Number" updateFormValue={updateFormValue} />

      <InputText type="text" defaultValue={userData.vehicle_number} updateType="vehicle_number" containerStyle="mt-4" labelTitle="Vehicle Number" updateFormValue={updateFormValue} />

      {/* <ErrorText styleClass="mt-4">{errorMessage}</ErrorText> */}

      <div className="modal-action">
        {/* <button className="btn btn-ghost" onClick={closeModal}>Cancel</button> */}
        <button className="btn btn-primary px-6" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddUserForm;
