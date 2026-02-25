import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/login");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="fullscreen-center bg-black text-white">
      <div className="">
        <h1 className="">
          You Need To Be An Admin
        </h1>
        <p className="fs-5 text-center">
          You Are Not Authenticated (Error 401) ❌
        </p>
      </div>
    </div>
  );
}
