import React from "react";
const facebook = "src/assets/images/facebook.svg";
const insta  = "src/assets/images/insta.svg";

const SocialIcons = () => {
  const IconsData = [
    { url: facebook, name: "facebook" },
    { url: insta, name: "insta" },
  ];
  return (
    <div className="flex flex-row gap-2">
      {IconsData &&
        IconsData.map((item, index) => (
          <img
            key={index}
            src={item?.url}
            alt={item?.name}
            height={30}
            width={30}
          />
        ))}
    </div>
  );
};

export default SocialIcons;
