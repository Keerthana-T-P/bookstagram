"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Main from "./Menu";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import { Logout } from "@mui/icons-material";
import Menu from "./Menu";
import { dark } from "@clerk/themes";
import '../(root)/styles/globals.css'
const LeftSideBar = () => {
  const isLoggedin = true;
  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] custom-scrollbar">
      <Link href="/">
        <Image src="/assets/logo.png" alt="hi" width={100} height={100} />
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href="/">
            <Image
              src="/assets/profile.png"
              alt="profile photo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="text-small-bold">Keerthana T P</p>
          </Link>
        </div>
        <div className="flex text-white justify-between w-full">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>
        <hr />
        <Menu />
        <hr />
        <div className="flex gap-4 items-center">
          <UserButton afterSignOutUrl="/sign-in" />
          <p className="text-white text-body-bold">Manage account</p>
        </div>
        <SignedIn className="bg-white">
          <SignOutButton>
            <div className="flex cursor-pointer gap-4">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
              <p className="text-body-bold text-light-1">Log Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default LeftSideBar;
