"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavbarComponent() {
  const [user, setUser] = useState("dayana");

  const handleCambiar = () => {
    setUser(user);
  };

  const pathName = usePathname();

  return (
    <>
      <nav className="bg-cyan-950 flex p-4 justify-between">
        <div>
          <span>{user}</span>
          <button className="text-white ml-2" onClick={handleCambiar}>
            cambiar
          </button>
        </div>
        <div className="flex gap-2 text-white">
          <Link
            className={` hover:bg-cyan-800 p-2 rounded ${
              pathName === "/auth/login" ? "border-b-2" : ""
            }`}
            href={"/auth/login"}
          >
            login
          </Link>
          <Link
            className={` hover:bg-cyan-800 p-2 rounded ${
              pathName === "/auth/register" ? "border-b-2" : ""
            }`}
            href={"/auth/register"}
          >
            register
          </Link>
        </div>
      </nav>
    </>
  );
}
