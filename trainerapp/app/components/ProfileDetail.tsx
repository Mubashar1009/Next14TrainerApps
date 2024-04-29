import Image from "next/image";
import React from "react";
import ProfileImage from "@/public/images/Ellipse 22.png";
import { Cross, Correct } from "@/public/svgs/index";

const ProfileDetailData = [
  {
    image: (
      <Image src={ProfileImage} alt="Profile Image" width={50} height={50} />
    ),
    name: "Huzafa",
    phoneNumber: 4354354252,
    email: "abce@gmail.com",
    verify: "view",
    approvalWrong: <Cross />,
    approvalCorrect: <Correct />,
  },
  {
    image: (
      <Image src={ProfileImage} alt="Profile Image" width={50} height={50} />
    ),
    name: "Huzafa",
    phoneNumber: 4354354252,
    email: "abce@gmail.com",
    verify: "view",
    approvalWrong: <Cross />,
    approvalCorrect: <Correct />,
  },
  {
    image: (
      <Image src={ProfileImage} alt="Profile Image" width={50} height={50} />
    ),
    name: "Huzafa",
    phoneNumber: 4354354252,
    email: "abce@gmail.com",
    verify: "view",
    approvalWrong: <Cross />,
    approvalCorrect: <Correct />,
  },
  {
    image: (
      <Image src={ProfileImage} alt="Profile Image" width={50} height={50} />
    ),
    name: "Huzafa",
    phoneNumber: 4354354252,
    email: "abce@gmail.com",
    verify: "view",
    approvalWrong: <Cross />,
    approvalCorrect: <Correct />,
  },
];

export const ProfileDetail = () => {
  return (
    <table className=" bg-white rounded-2xl px-9 py-3.5 w-full">
      <thead className="border-b-[1px] mb-[13px] ">
        <tr className="text-base text-[#989898] font-thin  ">
          <th className=" p-7">Images</th>
          <th>Name</th>
          <th>Phone no</th>
          <th>Email</th>
          <th>Verify</th>
          <th>Approval</th>
        </tr>
      </thead>
      <tbody>
        {ProfileDetailData.map((detail, index) => (
          <tr key={index} className="my-[13px] border-b-[1px] ">
            <td className="   flex justify-center my-[13px]">{detail.image}</td>
            <td className=" text-center">{detail.name}</td>
            <td className=" text-center">{detail.phoneNumber}</td>
            <td className=" text-center">{detail.email}</td>
            <td className=" text-center">{detail.verify}</td>
            <td className=" text-center ">
              <div className="flex gap-[7px] justify-center items-start">
                {detail.approvalCorrect}
                {detail.approvalWrong}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
