"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function LogoutButton() {
  const router = useRouter();
  const onLogout = async () => {
    await signOut({ callbackUrl: "/auth/sign-in" });
  };
  return (
    <span className="cursor-pointer" onClick={onLogout}>
      {" "}
      Logout{" "}
    </span>
  );
}
