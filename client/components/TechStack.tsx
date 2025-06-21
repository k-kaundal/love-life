"use client";
import React from "react";
import { FaPython, FaDatabase, FaGitAlt, FaLinux, FaRProject, FaMicroscope, FaFlask, FaChartBar } from "react-icons/fa";
import { SiJupyter, SiPandas, SiNumpy, SiScikitlearn, SiTableau, SiPowers, SiMongodb, SiPostgresql } from "react-icons/si";
import { GiBracer, GiTestTubes, GiChemicalDrop, GiMicroscope } from "react-icons/gi";
import { motion } from "framer-motion";

// Microbiology & Scientific Tech Stack
const stack = [
  { icon: FaMicroscope, name: "Light/Electron Microscopy" },
  { icon: GiBracer, name: "Microbial Culture" },
  { icon: GiTestTubes, name: "PCR & Gel Electrophoresis" },
  { icon: GiChemicalDrop, name: "Biochemical Assays" },
  { icon: FaFlask, name: "Lab Techniques" },
  { icon: FaPython, name: "Python" },
  { icon: FaRProject, name: "R" },
  { icon: SiJupyter, name: "Jupyter Notebooks" },
  { icon: SiPandas, name: "Pandas" },
  { icon: SiNumpy, name: "NumPy" },
  { icon: SiScikitlearn, name: "scikit-learn" },
  { icon: SiTableau, name: "Tableau" },
  { icon: SiPowers, name: "Power BI" },
  { icon: FaChartBar, name: "Data Visualization" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: FaDatabase, name: "SQL/NoSQL" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaLinux, name: "Linux" },
];

const TechStack = () => {
  return (
    <section className="py-16" id="tech-stack">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">My Scientific Toolkit</h3>
        <div className="flex flex-wrap justify-center gap-10">
          {stack.map(({ icon: Icon, name }, i) => (
            <motion.div
              key={name}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.2, rotate: 6 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <Icon size={48} className="text-blue-500 mb-2" />
              <span className="text-lg text-center">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;