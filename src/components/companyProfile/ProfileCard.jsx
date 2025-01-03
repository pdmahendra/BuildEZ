import React from "react";

const ProfileCard = ({ name, designation }) => {
  return (
    <div>
      <div className="w-[344px] text-[#000000]">
        <img
          src="/companyProfileImg3.jpg"
          alt=""
          className="object-cover"
          loading="lazy"
        />
        <div className="bg-[#EFEFEF] p-6 rounded-b-2xl space-y-2">
          <h5 className="text-lg">{name}</h5>
          <p className="text-sm">{designation}</p>
          {/* <p className="text-sm">
            {data.description}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
