"use client";
import { useState, useRef, FormEvent, useEffect } from "react";
import LandingIntro from "./LandingIntro";
import ErrorText from "../../components/Typography/ErrorText";
import Link from "next/link";
import InputText from "@/components/Input/InputText";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react"; // Import icons
import { setCredentials } from "./authSlice";
import { toast } from "react-toastify";
import { useDispatch, UseDispatch } from "react-redux";
import { baseUrl } from "@/utils/app_data";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const INITIAL_LOGIN_OBJ = {
    password: "",
    emailId: "",
  };
  let responseUser = {
    id: 0,
    name: "",
    email: "",
    role: "",
  };

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (loginObj.emailId.trim() === "")
      return setErrorMessage("Email Id is required! (use any value)");
    if (loginObj.password.trim() === "")
      return setErrorMessage("Password is required! (use any value)");
    else {
      try {
        const payload = {
          email: loginObj.emailId,
          password: loginObj.password,
        };

       const reponse = await axios.post(`${baseUrl}auth/login`, payload)
          localStorage.clear();
         if(reponse.data.code==200) {
          responseUser = {
            id: reponse.data.id,
            name: reponse.data.name,
            email: reponse.data.email,
            role: reponse.data.role,
          };

          dispatch(setCredentials({ token: reponse.data.token, responseUser }));

          localStorage.setItem("user", JSON.stringify(responseUser));
          localStorage.setItem("token", reponse.data.token);

          router.push("/welcome");
         }
             
      } catch (error) {
           if (axios.isAxiosError(error) && error.response?.status === 401) {
             toast.error(error.response.data.message.message);
           }
        console.log(error);
      } finally {
      }
    }
  }

  const updateFormValue = ({ updateType, value }: any) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-300 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10 relative">
            <h2 className="text-2xl font-semibold mb-2 text-center text-base-content">
              Login
            </h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4 ">
                <InputText
                  labelStyle={""}
                  placeholder={""}
                  type="emailId"
                  defaultValue={loginObj.emailId}
                  updateType="emailId"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                />

                <div className="relative">
                  <InputText
                    labelStyle={""}
                    placeholder={""}
                    defaultValue={loginObj.password}
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
              </div>

              <div className="text-right text-primary">
                <Link href="/forgot-password">
                  <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn mt-2 w-full btn-primary" + (loading ? " loading" : "")
                }
              >
                Login
              </button>

              <div className="text-center mt-4 text-base-content">
                Don't have an account yet?{" "}
                <Link href="/register">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Register
                  </span>
                </Link>
              </div>
            </form>
            <div className="absolute bottom-3 right-10 ">
              <button
                title="cancel login"
                className="bg-red-400 text-white px-4 py-2 rounded-lg "
                onClick={() => router.push("/")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
