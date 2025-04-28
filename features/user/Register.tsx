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
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

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
  const [showPassword, setShowPassword] = useState(false);
  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);

  const [register, { data, isError, isLoading, isSuccess }] =
    useSignupMutation();

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

 
      const respo = await register(payload).unwrap();
      toast.success("Thank you for registering,\n Now Login to your Account", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        theme:'colored', 
        style: {
          backgroundColor: '#14b8a6', // teal-500 hex from Tailwind (#14b8a6)
          color: 'white',
          fontWeight: 'bold'
        }
      })
      router.push("/login");

    }
  };

  const updateFormValue = ({ updateType, value }:{updateType: string, value:string}) => {
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
            <h2 className="text-2xl dark:text-gray-200 text-gray-800 font-semibold mb-2 text-center">
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

                <div className="relative">
                  
                  <InputText
                    defaultValue={registerObj.password}
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
