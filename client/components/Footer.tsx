"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaMedium, FaGlobe } from "react-icons/fa";

const socials = [
//   {
//     icon: FaLinkedin,
//     url: "https://www.linkedin.com/in/garima-kumar", // Update to actual profile
//     label: "LinkedIn",
//   },
//   {
//     icon: FaGithub,
//     url: "https://github.com/garima-kumar", // Update to actual profile
//     label: "GitHub",
//   },
  {
    icon: FaTwitter,
    url: "https://x.com/anu_garima", // Update to actual handle
    label: "Twitter/X",
  },
//   {
//     icon: FaMedium,
//     url: "https://medium.com/@garima.microbio", // Update to actual Medium/blog
//     label: "Medium",
//   },
  {
    icon: FaGlobe,
    url: "https://garima.kaundal.vip",
    label: "Personal Website",
  },
];

export default function Footer() {
  return (
    <footer className="w-full mt-20 py-8 bg-gradient-to-r from-blue-900 via-gray-900 to-green-900 text-gray-200 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-bold text-lg tracking-tight">
            Garima Kumar &copy; {new Date().getFullYear()}
          </div>
          <div className="text-sm mt-1 text-blue-200">
            Crafted with Next.js, TypeScript, Tailwind CSS &amp; ❤️
          </div>
        </div>
        <div className="flex gap-5 text-2xl mt-4 md:mt-0">
          {socials.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-blue-400 transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-400">
        Powered by <a href="https://nextjs.org/" className="underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">Next.js</a>
        {" | "}
        <a href="mailto: garimaanu65@gmail.com" className="underline hover:text-blue-200">
          garimaanu65@gmail.com
        </a>
      </div>
    </footer>
  );
}