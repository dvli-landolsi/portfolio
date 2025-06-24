"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineUser,
  AiOutlineAppstore,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

const tabs = [
  { name: "Profile", icon: <AiOutlineUser />, path: "/" },
  { name: "Projects", icon: <AiOutlineAppstore />, path: "/projects" },
  { name: "Resources", icon: <AiOutlineFileText />, path: "/resources" },
  { name: "Contact me", icon: <AiOutlineMail />, path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const resumeMenuItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a href="/resume-eng.pdf" download="resume-eng-landolsi-mohamedali.pdf">
          English Resume
        </a>
      ),
    },
    // {
    //   key: "2",
    //   label: (
    //     <a
    //       href="/resume-fr-landolsi-mohamedali.pdf"
    //       download="resume-fr-landolsi-mohamedali.pdf"
    //     >
    //       French Resume
    //     </a>
    //   ),
    // },
  ];

  return (
    <div className="relative h-[258px] rounded-2xl max-h-1/2  overflow-hidden shadow mb-8">
      {/* Animated background layers */}
      <div className="absolute inset-0 -left-1/2 -right-1/2 bg-gradient-to-r   from-[#b5ff5a] via-[#46d1d6] to-[#0099ff] opacity-50 animate-slide z-0" />
      <div className="absolute inset-0 -left-1/2 -right-1/2 bg-gradient-to-r  from-[#5d85c9] via-[#020201] to-[#0099ff] opacity-50 animate-slide-reverse z-0" />
      <div className="absolute inset-0 -left-1/2 -right-1/2 bg-gradient-to-r  from-[#66cc33] via-[#6cc7ff] to-[#0099ff] opacity-50 animate-slide-slow z-0" />

      {/* Content */}
      <div className="relative h-full z-10 flex flex-col gap-0 bg-white/80 backdrop-blur-sm">
        {/* Top section */}
        <div className="flex h-full flex-row items-center justify-between px-8 pt-8 pb-4">
          {/* Left: Profile */}
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden -mb-8 z-10 bg-white">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={112}
                height={112}
              />
            </div>
            <div className="text-gray-800">
              <h1 className="text-3xl font-medium">Landolsi Mohamed Ali</h1>
              <p className="text-lg font-medium opacity-90">
                Software Engineer | Front-end Developer | Scrum Master
              </p>
            </div>
          </div>
          {/* Right: Illustration */}
          {/* <div className="hidden md:block">
            <Image
              src="/header-illustration.png"
              alt="Illustration"
              width={260}
              height={160}
            />
          </div> */}
        </div>
        {/* Tabs and Action Buttons */}
        <div className="bg-white flex flex-col sm:flex-row items-center justify-between px-8 pt-2 pb-0 border-t border-gray-100">
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 sm:pb-0">
            {tabs.map((tab) => {
              const isActive =
                tab.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(tab.path);
              return (
                <Link key={tab.name} href={tab.path} passHref>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium text-base transition-colors border-b-2 ${
                      isActive
                        ? "text-blue-600 border-blue-600 bg-white"
                        : "text-gray-500 border-transparent hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    {tab.name}
                  </button>
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 py-2 sm:py-0 mb-1.5">
            {/* Upload My Resume Button */}
            <Dropdown menu={{ items: resumeMenuItems }} placement="bottomRight">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-500 rounded-lg hover:bg-blue-600 border border-gray-500 hover:text-white transition-colors duration-300 text-sm font-medium cursor-pointer select-none">
                <AiOutlineCloudUpload className="text-lg" />
                Download Resume
                <DownOutlined />
              </button>
            </Dropdown>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/mohamed-ali-landolsi-0a23a4359/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/dvli-landolsi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(25%);
          }
        }

        .animate-slide {
          animation: slide 3s ease-in-out infinite alternate;
        }

        .animate-slide-reverse {
          animation: slide 4s ease-in-out infinite alternate-reverse;
        }

        .animate-slide-slow {
          animation: slide 5s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
