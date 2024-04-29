import Image from "next/image";

import { InformationCard } from "@/app/components/InformationCard";
import { ProfileDetail } from "@/app/components/ProfileDetail";
import { ProfitDetail } from "@/app/components/ProfitDetail";
import {
  Search,
  Notification,
  Welcome,
  Arrow
} from "@/public/svgs/index";
import ProfileImage from "@/public/images/Ellipse 22.png"
export default function Home() {
  return (
   
        <div className="flex flex-col ml-10  ">
           <div className= " flex justify-between items-center  ">
           <div className="flex gap-6">
            <h4 className="text-[#222222] text-4xl">Welcome, Admin</h4>
            <Welcome />
          </div>
          <div className= " flex gap-2 justify-center items-center">
            <Search/>
            <Notification/>
            <Image src = {ProfileImage} alt  = "Person Image" /  > 
            <Arrow/>
          </div>
           </div>
          <p className="text-[#222222] text-4xl font-medium mt-20 mb-7">
            Dashboard
          </p>
          <InformationCard />

          <div className="flex gap-7">
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center my-7">
                <p className="text-[#282828] text-2xl ">
                  Trainers Registrations
                </p>
                <p className="text-[#989898] text-sm ">View All</p>
              </div>
              <div className="flex-1">
                <ProfileDetail />
              </div>
            </div>
            <div>
              <div className="flex justify-between align-center my-7">
                <p className="text-[#282828] text-2xl ">Profits</p>
                <p className="text-[#989898] text-sm ">View All</p>
              </div>
              <ProfitDetail />
            </div>
          </div>
        </div>
     
  );
}
