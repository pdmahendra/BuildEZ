import React from "react";

const ProfileCard = () => {
  return (
    <div>
      <div className="w-[344px] text-[#000000]">
        <img src="/companyProfileImg3.jpg" alt="" className="object-cover" loading="lazy" />
        <div className="bg-[#EFEFEF] p-6 rounded-b-2xl space-y-2">
          <h5 className="text-lg">H. S. Malhotra</h5>
          <p className="text-sm">Sales Manager</p>
          <p className="text-sm">
            About the person response work responsiblity and etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
