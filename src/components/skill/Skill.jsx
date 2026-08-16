import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../SectionHeader";

const SkillsSection = () => {
  const { themeColors, theme } = useSelector((state) => state.themeReducer);
  const [hoveredTech, setHoveredTech] = useState(null);

  const techCategories = {
    website: {
      title: "Website Development",
      description:
        "Building and maintaining functional, clean websites for real projects like childrenchoicebooks.com.",
      icons: [
        {
          name: "Softr",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
          tooltipColor: "#000000",
        },
        {
          name: "HTML5",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          tooltipColor: "#E34F26",
        },
        {
          name: "CSS3",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          tooltipColor: "#1572B6",
        },
        {
          name: "JavaScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          tooltipColor: "#F7DF1E",
        },
      ],
    },
    hosting: {
      title: "Server & Hosting",
      description:
        "Managing hosting accounts, domains, and server configuration for live websites.",
      icons: [
        {
          name: "cPanel",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cpanel/cpanel-original.svg",
          tooltipColor: "#FF6C2C",
        },
        {
          name: "WHM",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cpanel/cpanel-original.svg",
          tooltipColor: "#FF6C2C",
        },
        {
          name: "Apache",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
          tooltipColor: "#D22128",
        },
        {
          name: "Linux",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          tooltipColor: "#FCC624",
        },
      ],
    },
    database: {
      title: "Database Management",
      description:
        "Managing MySQL databases directly and through phpMyAdmin — schemas, queries, and backups.",
      icons: [
        {
          name: "MySQL",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          tooltipColor: "#4479A1",
        },
        {
          name: "phpMyAdmin",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          tooltipColor: "#6C78AF",
        },
      ],
    },
  };

  return (
    <section
      className="py-28 px-4 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: themeColors.bg }}
      id="skills"
    >
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div
          className="absolute -top-1/3 -left-1/3 w-full h-full"
          style={{
            background: `radial-gradient(circle at center, ${themeColors.primaryColor} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/3 w-full h-full"
          style={{
            background: `radial-gradient(circle at center, ${themeColors.secondary} 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title={"Explore My"}
          highlight={"Skills"}
          subtitle={"Website development, server & hosting, and database management"}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(techCategories).map(([key, category], i) => (
            <motion.div
              key={key}
              className="p-8 rounded-3xl relative overflow-hidden"
              style={{
                background: `${themeColors.cardBg}4D`,
                border: `1px solid ${themeColors.border}`,
                backdropFilter: "blur(16px)",
                boxShadow: `0 8px 32px ${
                  theme === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"
                }`,
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 + 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: themeColors.primaryColor }}
                  whileHover={{ x: 5 }}
                >
                  {category.title}
                </motion.h3>
                <motion.p
                  className="text-sm"
                  style={{ color: themeColors.summeryText }}
                >
                  {category.description}
                </motion.p>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                {category.icons.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="relative group flex flex-col items-center"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <motion.div
                      className="w-16 h-16 flex items-center justify-center rounded-xl relative"
                      style={{
                        backgroundColor: themeColors.cardBg,
                        border: `1px solid ${themeColors.border}`,
                      }}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: `0 0 20px ${tech.tooltipColor}40`,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(circle at center, ${tech.tooltipColor}20, transparent 70%)`,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <img
                        src={tech.src}
                        alt={tech.name}
                        className="w-8 h-8 object-contain z-10"
                        style={{
                          filter: theme === "dark" ? "brightness(0.9)" : "none",
                        }}
                      />
                    </motion.div>

                    <AnimatePresence>
                      {hoveredTech === tech.name && (
                        <motion.div
                          className="absolute bottom-full mb-3 px-3 py-2 rounded-md text-xs font-semibold z-50"
                          style={{
                            backgroundColor: tech.tooltipColor,
                            color: "#FFFFFF",
                            boxShadow: `0 4px 12px ${tech.tooltipColor}60`,
                          }}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                            },
                          }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        >
                          {tech.name}
                          <div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent"
                            style={{
                              borderTopColor: tech.tooltipColor,
                              filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: themeColors.primaryColor,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 60],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
