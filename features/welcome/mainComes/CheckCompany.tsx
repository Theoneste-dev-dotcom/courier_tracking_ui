'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCompanyId } from "../welcomeSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface CheckType {
  children: React.ReactNode;
}
const CheckCompany: React.FC<CheckType> = ({ children }) => {
 const user_local=  localStorage.getItem('user')
 const user = JSON.parse(user_local? user_local :  "undefined")

 const dispatch = useDispatch();
 const router = useRouter();
 const [loading, setLoading] = useState(false); // 🟡 Track if fetch is done

  const getCurrentCompany = async () => {
    try {
      setLoading(true);
      const respo = await axios.get(
        "http://localhost:3001/users/user-company/company",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (respo.data.id) {
        localStorage.setItem("current-company-id", respo.data.id);
        dispatch(
          setCompanyId({
            companyId: respo.data.id,
            companyName: respo.data.name,
          })
        );
        setLoading(false)
      } else {
        toast.warning("You are registered in any company", { autoClose: 3000 });
        localStorage.clear();
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
      router.push("/");
    }
  };

  useEffect(() => {
    console.log(['company_owner', 'client'].includes(user.role), "hey what the heck")
   if(!["company_owner", "client"].includes(user.role)) getCurrentCompany();
  }, []);

  if (loading) return <p className="p-4 text-gray-500">Checking company info...</p>; // Or your own spinner

  return <div>{children}</div>;
};

export default CheckCompany;

