import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex-between fixed z-50 bg-dark-1 px-6 py-2 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        {/* <Image
          className="max-sm:w-[100px]"
          src="/icons/poom-logo.png"
          alt="Yoom logo"
          width={200}
          height={75}
          crossOrigin="anonymous"
        /> */}
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;