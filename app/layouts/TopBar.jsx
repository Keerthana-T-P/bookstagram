"use client"; // Ensures this component is client-side

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Add, Logout } from "@mui/icons-material";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import '../(root)/styles/globals.css'
const TopBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);
   

  // Ensure the component is mounted before using the router
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on the server-side

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="search posts, people,..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="search-icon" onClick={() => {}} />
      </div>
      <button className="create-post-btn" onClick={() => router.push("/create-post")}>
        <Add /> <p>Create A Post</p>
      </button>
      <div className="flex gap-3">
        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer gap-4">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
              <p className="text-body-bold text-light-1">Log Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
        <Link href='/'>
          <Image src='/assets/logo.png' alt='profile photo' width={50} height={50} className='rounded-full md:hidden' />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
