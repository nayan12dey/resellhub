"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { MdOutlineInventory2 } from "react-icons/md";
import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


interface ProfileDropdownProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

const ProfileDropdown = ({ user, }: ProfileDropdownProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
    setOpen(false);
    router.replace("/login");

  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Pure Clickable Profile Image (No button wrapper styles) */}
      <div
        onClick={() => setOpen(!open)}
        className="relative h-9 w-9 cursor-pointer overflow-hidden rounded-full ring-2 ring-gray-100 hover:ring-blue-500 transition-all duration-200 select-none active:scale-95"
      >
        <Image
          src={user?.image || "/default-avatar.png"}
          alt="Profile"
          width={44}
          height={44}
          sizes="36px"
          priority
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Perfect Down Slider Dropdown */}
      <div
        className={`absolute right-0 mt-3 w-64 origin-top transform overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl transition-all duration-200 z-50 ${open
          ? "opacity-100 translate-y-0 scale-100 visible"
          : "opacity-0 -translate-y-4 scale-95 invisible pointer-events-none"
          }`}
      >
        {/* User Info */}
        <div className="border-b border-gray-100 bg-gray-50/50 px-4 py-3">
          <h3 className="font-semibold text-gray-800 text-sm">
            {user?.name}
          </h3>
          <p className="text-xs text-gray-500 font-medium truncate">
            {user?.email}
          </p>
        </div>

        {/* Menu Items */}
        <div className="py-1">
          <Link
            href="/items/add"
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors duration-150 hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            <HiOutlinePlusCircle className="text-lg text-gray-400" />
            Add Item
          </Link>

          <Link
            href="/items/manage"
            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors duration-150 hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            <MdOutlineInventory2 className="text-lg text-gray-400" />
            Manage Items
          </Link>

          <div className="border-t border-gray-100 my-1"></div>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium text-red-600 transition-colors duration-150 hover:bg-red-50"
          >
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;