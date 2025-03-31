"use client";

import { useState, useRef, FormEvent } from "react";
import LandingIntro from "./LandingIntro";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";
import Link from "next/link";
import SelectBox from "@/components/Input/SelectBox";
import { roles } from "@/utils/roles";
import { useSignupMutation } from "./authSlice";
import { useRouter } from "next/navigation";
import axios from "axios";

function Register() {
  const router = useRouter();
  const INITIAL_REGISTER_OBJ = {
    name: "",
    password: "",
    emailId: "",
    role: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);

  const [register, {data, isError, isLoading, isSuccess}] = useSignupMutation();

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (registerObj.name.trim() === "")
      return setErrorMessage("Name is required! (use any value)");
    if (registerObj.emailId.trim() === "")
      return setErrorMessage("Email Id is required! (use any value)");
    if (registerObj.password.trim() === "")
      return setErrorMessage("Password is required! (use any value)");
    if (registerObj.role.trim() === "")
      return setErrorMessage("Role is required! (use any value)");
    else {
      setLoading(true);
      // Call API to check user credentials and save token in localstorage
      localStorage.setItem("token", "DumyTokenHere");
      setLoading(false);
      const payload = {
        name: registerObj.name,
        email: registerObj.emailId,
        password: registerObj.password,
        role: registerObj.role,
      };

      // const response = await axios.post("http://localhost:3001/users", payload);

      const respo = await register(payload);
      console.log(respo)
      if(isSuccess){
        alert('User registered Successfully')
      }
     
      if(isError) {
        alert("failed to register user")
      }
      // if (response.data.success == false) {
      //   alert(response.data.message);
      // } else {
      //   router.push("login");
      // }
      // console.log("User registration response", response);

      //   router.push("admin/welcome");
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setRegisterObj({ ...registerObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl text-gray-800 font-semibold mb-2 text-center">
              Register
            </h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  defaultValue={registerObj.name}
                  updateType="name"
                  containerStyle="mt-4"
                  labelTitle="Name"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={registerObj.emailId}
                  updateType="emailId"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={registerObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />

                <SelectBox
                  defaultValue={registerObj.role}
                  type="text"
                  updateType="role"
                  containerStyle="mt-4"
                  labelTitle="Role"
                  options={roles}
                  updateFormValue={updateFormValue}
                />
              </div>

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn mt-2 w-full btn-primary" + (loading ? " loading" : "")
                }
              >
                Register
              </button>

              <div className="text-center mt-4">
                Already have an account?{" "}
                <Link href="/login">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Login
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
