"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLink, FaRocket, FaWrench } from "react-icons/fa";

// Define a type for status
type Status = "live" | "working";

const projects: {
  title: string;
  desc: string;
  link: string;
  status: Status;
  tags: string[];
}[] = [
  {
    title: "Microbial Genomics Explorer",
    desc: "Web platform for analyzing and visualizing microbial genome data. Enables researchers to compare genomes, annotate genes, and discover evolutionary patterns.",
    link: "#",
    status: "working",
    tags: ["Microbiology", "Genomics", "Bioinformatics", "Visualization"],
  },
  {
    title: "Lab Management System",
    desc: "A digital tool for efficient management of laboratory inventory, experiment records, and resource scheduling.",
    link: "#",
    status: "working",
    tags: ["Lab Management", "Automation", "React"],
  },
  {
    title: "Antibiotic Resistance Tracker",
    desc: "A dashboard to monitor and visualize trends in antibiotic resistance among clinical isolates. Facilitates data-driven research and public health insights.",
    link: "#",
    status: "working",
    tags: ["Antibiotic Resistance", "Data Visualization", "Public Health"],
  },
  {
    title: "Open Science Blog",
    desc: "Personal website sharing research articles, lab notes, and educational content in microbiology and life sciences.",
    link: "https://article.kaundal.vip",
    status: "live",
    tags: ["Blog", "Science Communication", "Microbiology"],
  },
  {
    title: "Research Publications Portal",
    desc: "A curated collection of my research publications, conference posters, and presentations in microbial science.",
    link: "#publications",
    status: "live",
    tags: ["Publications", "Microbiology", "Research"],
  },
];

const statusIcon: Record<Status, React.ReactNode> = {
  live: <FaRocket className="inline-block mr-1 text-green-500" title="Live" />,
  working: <FaWrench className="inline-block mr-1 text-yellow-500" title="In Development" />,
};

export default function Projects() {
  return (
    <section
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
      id="projects"
    >
      <h3 className="text-3xl font-bold text-center mb-8">Featured Projects</h3>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target={p.link.startsWith("http") ? "_blank" : undefined}
            rel={p.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`w-80 p-6 rounded-xl shadow-md cursor-pointer hover:shadow-2xl transition bg-white dark:bg-gray-800 border-2 ${
              p.status === "working"
                ? "border-yellow-400"
                : "border-green-400"
            }`}
            whileHover={{ scale: 1.05, y: -10 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <div className="flex items-center mb-2">
              <span className="mr-2">{statusIcon[p.status]}</span>
              <h4 className="text-xl font-semibold">{p.title}</h4>
              {p.link.startsWith("http") && (
                <FaLink className="ml-2 text-blue-400" />
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags &&
                p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100 px-2 py-0.5 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            {p.status === "working" && (
              <div className="mt-4 text-xs text-yellow-600 dark:text-yellow-300 font-semibold">
                🚧 In Development
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
}