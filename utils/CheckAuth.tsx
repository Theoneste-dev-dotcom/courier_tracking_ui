import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const CheckAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }else {
        setIsAuth(false);
        router.push('/')
    }
    
  }, [router]);

  return <div> {isAuth && <div>{children}</div>}</div>;
};

export default CheckAuth;
