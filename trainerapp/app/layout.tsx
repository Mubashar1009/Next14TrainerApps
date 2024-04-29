import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BrandLogo from "@/public/images/BrandIcon.png";
import Link from "next/link";
import {SideBar} from "@/app/components/SideBar";
import Image from "next/image";
import {

  LogoutIcon,
  
} from "@/public/svgs/index";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = "font-lexend" >
      <div className="  bg-[#f8f8f8]  px-6 py-3.5 flex">
      <div className="mt-11 flex  ">

      <div className="bg-white  gap-11  flex flex-col py-3.5 px-6  rounded-2xl h-[750px] justify-center items-center ">
          <Image src={BrandLogo} alt="Brand Logo " />
             <SideBar/>
             <div className =  " flex-1 flex items-end ">
              <Link href  = "./logout" > <LogoutIcon/>  
               
              </Link>
             </div>
        </div>
        </div>
        <div className="mt-11 flex-1 pt-6   " >{children}</div>
    </div>
        
        </body>
    </html>
  );
}
