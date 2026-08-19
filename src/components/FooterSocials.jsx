import React from "react";
import { useSelector } from "react-redux";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const FooterSocial = () => {
  const { themeColors } = useSelector((state) => state.themeReducer);
  const socials = [
    {
      id: "linkedin",
      icon: FiLinkedin,
      label: "Priyanshu Sharma",
      url: "https://www.linkedin.com/in/priyanshu-sharma-a59293241/",
      color: "#0e76a8",
    },
    {
      id: "github",
      icon: FiGithub,
      label: "scisims12",
      url: "https://github.com/scisims12",
      color: themeColors.text,
    },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {/* eslint-disable-next-line */}
      {socials.map(({ id, icon: Icon, label, url, color }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-start h-[50px] w-[50px] rounded-xl shadow-md transition-all duration-300 overflow-hidden hover:w-[160px] hover:rounded-md cursor-pointer`}
          style={{
            backgroundColor: themeColors.bg,
          }}
        >
          <div className="flex items-center gap-2 px-2">
            <Icon className="w-6 h-6" style={{ color }} />
            <span
              className={`text-sm font-medium transition-all duration-300 w-0 overflow-hidden group-hover:w-[90px]`}
              style={{ color: themeColors.text }}
            >
              {label}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;
