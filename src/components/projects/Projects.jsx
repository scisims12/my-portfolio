import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Mixify",
    subtitle: "Open-Source Android Music App",
    description:
      "An Android music app I maintain and extend with Kotlin and Jetpack Compose. Mixify brings together synced lyrics, offline listening, playlist management and Listen Together rooms. My enhancements include a custom lock-screen player with lyrics, song and lyrics share cards, room-sharing links and UI refinements.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Synced Lyrics", "Listen Together"],
    image: "/mixify-project.svg",
    liveDemo: "/mixify.html",
    liveDemoLabel: "Visit Mixify",
    liveDemoDescription: "Read about the app, features and development",
    githubRepo: "https://github.com/scisims12/Mixify",
    projectColor: "#8B5CF6",
  },
  {
    title: "Children Choice Books",
    subtitle: "Office Website, Hosting & Database Management",
    description:
      "The office website for Children Choice Publication, an educational publishing house. My work covers website and content updates, hosting and server administration through cPanel & WHM, and maintenance of the underlying MySQL database.",
    tags: ["Softr", "cPanel", "WHM", "Apache", "Linux", "MySQL", "phpMyAdmin"],
    image: "/children-choice-home.png",
    liveDemo: "/children-choice-books.html",
    liveDemoLabel: "View Project",
    liveDemoDescription: "Explore the office website and my work",
    githubRepo: "",
    projectColor: "#2563eb",
  },

];

const ProjectTimeline = () => {
  const { themeColors } = useSelector((state) => state.themeReducer);

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: themeColors.bg }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              backgroundColor: project.projectColor,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold inline-block px-6 py-2 relative z-10"
            style={{
              color: themeColors.primaryColor,
              backgroundColor: themeColors.bg,
            }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">Latest Work</span>
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-1 mx-auto"
              style={{ backgroundColor: themeColors.primaryColor }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.h2>
        </motion.div>

        {/* Vertical timeline line */}
        <div
          className="w-0.5 hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
          style={{ backgroundColor: themeColors.primaryColor }}
        ></div>

        {/* Projects */}
        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, index) => {
            const isHovered = hoveredProject === index;

            return (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                isHovered={isHovered}
                setHoveredProject={setHoveredProject}
              />
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default ProjectTimeline;
