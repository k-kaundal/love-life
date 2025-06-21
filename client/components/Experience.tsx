"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Institute of Microbial Technology",
    role: "Research Scientist",
    period: "2022 - Present",
    desc: "Leading research in microbiology, focusing on microbial genetics and antibiotic resistance. Coordinating laboratory experiments and mentoring junior researchers.",
    techs: ["Microbial Genetics", "PCR", "Antibiotic Resistance", "Team Leadership", "Data Analysis"],
  },
  {
    company: "Open Science Community",
    role: "Contributor / Mentor",
    period: "2018 - Present",
    desc: "Active contributor to open scientific research, engaging in collaborative projects, and mentoring students in experimental microbiology and scientific publishing.",
    techs: ["Microbiology", "Collaboration", "Mentorship", "Scientific Writing", "Workshops"],
  },
];

export default function Experience() {
  return (
    <section className="py-16" id="experience">
      <h3 className="text-3xl font-bold text-center mb-8">Experience</h3>
      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg">{exp.role}</span>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </div>
            <div className="font-medium text-blue-600">{exp.company}</div>
            <div className="my-2 text-gray-700 dark:text-gray-200">{exp.desc}</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-2 py-0.5 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}