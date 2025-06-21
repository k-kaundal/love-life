"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaGlobe, FaMedium } from "react-icons/fa";
import Image from "next/image";

// Update these links and labels to Garima Kumar's actual details as needed
const socials = [
//   {
//     icon: FaLinkedin,
//     url: "https://www.linkedin.com/in/garima-kumar", // Update to actual profile
//     label: "LinkedIn",
//     color: "hover:text-blue-700",
//   },
//   {
//     icon: FaGithub,
//     url: "https://github.com/garima-kumar", // Update to actual profile
//     label: "GitHub",
//     color: "hover:text-gray-900 dark:hover:text-white",
//   },
  {
    icon: FaTwitter,
    url: "https://x.com/garima_microbio", // Update to actual handle
    label: "Twitter/X",
    color: "hover:text-blue-500",
  },
  {
    icon: FaEnvelope,
    url: "mailto:garimaanu65@gmail.com", // Update to actual email
    label: "Email",
    color: "hover:text-red-500",
  },
  {
    icon: FaGlobe,
    url: "https://garima.kaundal.vip", // Update to personal site if any
    label: "Personal Website",
    color: "hover:text-green-700",
  },
//   {
//     icon: FaMedium,
//     url: "https://medium.com/@garima.microbio", // Update to actual Medium/blog
//     label: "Medium",
//     color: "hover:text-green-700",
//   },
];

export default function Contact() {
  return (
    <section className="py-16" id="contact">
      <h3 className="text-3xl font-bold text-center mb-8">Contact & Social</h3>
      <div className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-900/70 rounded-3xl shadow-lg px-8 py-10 flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center">
          <Image
            src="/garima.png"
            alt="Garima Kumar"
            width={110}
            height={110}
            className="rounded-full border-4 border-blue-300 shadow-lg mb-4"
          />
          <div className="font-bold text-xl">Garima Kumar</div>
          <div className="text-blue-600 dark:text-blue-300 font-medium mt-1">
            Microbiologist · Researcher
          </div>
        </div>
        <div className="w-full text-center mb-8 text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
          <span>
            Interested in microbiology, research, or scientific collaboration? Reach out on any platform below — I’d love to connect!
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-3xl mb-4">
          {socials.map(({ icon: Icon, url, label, color }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`transition-colors duration-200 ${color} p-3 rounded-full bg-gray-100 dark:bg-gray-800 shadow hover:scale-110`}
            >
              <Icon />
            </a>
          ))}
        </div>
        <div className="mt-6 text-base text-gray-500 dark:text-gray-400">
          Or email me:{" "}
          <a
            href="mailto:garimaanu65@gmail.com" // Update to actual email
            className="underline hover:text-blue-700"
          >
            garimaanu65@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}