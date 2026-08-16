import React, { memo } from "react";
import { useSelector } from "react-redux";

function RightSideContent() {
  const { themeColors } = useSelector((state) => state.themeReducer);

  const approachCards = [
    {
      icon: "🖥️",
      title: "Server-Minded Development",
      description:
        "I don't just build pages — I think about the hosting and database behind them from day one.",
    },
    {
      icon: "🔧",
      title: "Hands-On Troubleshooting",
      description:
        "Comfortable diagnosing issues across the stack, from a broken page to a server or database hiccup.",
    },
  ];

  const Highlight = ({ children }) => (
    <span style={{ color: themeColors.primaryColor }}>{children}</span>
  );

  return (
    <div className="lg:w-1/2">
      <div className="sticky top-24">
        <div className="mb-10">
          {/* heading */}
          <h3
            className="text-3xl font-semibold mb-6"
            style={{ color: themeColors.primaryColor }}
          >
            My Development Philosophy
          </h3>

          {/* summary  */}
          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: `${themeColors.primaryColor}08`,
              border: `1px solid ${themeColors.border}`,
            }}
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: themeColors.summeryText }}
            >
              <li>
                <Highlight>Softr, HTML, CSS, JavaScript</Highlight>: Building
                and maintaining functional, clean websites — from page layout
                to interactive front-end details.
              </li>

              <li>
                <Highlight>cPanel & WHM</Highlight>: Managing hosting
                accounts, domains, and server configuration through cPanel
                and WHM for day-to-day site administration.
              </li>

              <li>
                <Highlight>Apache, Linux</Highlight>: Keeping the server side
                of a website running — configuring Apache and working
                comfortably in a Linux server environment.
              </li>

              <li>
                <Highlight>MySQL, phpMyAdmin</Highlight>: Managing databases
                directly and through phpMyAdmin — writing queries, updating
                schemas, and keeping data backed up and reliable.
              </li>

              <li>
                <Highlight>childrenchoicebooks.com</Highlight>: My primary
                project, where I own the website, hosting, and database
                together as one connected system.
              </li>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {approachCards.map((card, index) => (
            <div
              key={index}
              className="p-5 rounded-lg flex flex-col"
              style={{
                backgroundColor: themeColors.bg,
                border: `1px solid ${themeColors.border}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${themeColors.primaryColor}15`,
                  color: themeColors.primaryColor,
                }}
              >
                {card.icon}
              </div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: themeColors.primaryColor }}
              >
                {card.title}
              </h4>
              <p className="text-sm" style={{ color: themeColors.summeryText }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h4
            className="text-lg font-semibold mb-4"
            style={{ color: themeColors.primaryColor }}
          >
            Upcoming Learning Goals
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Advanced Server Administration", "Database Optimization"].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: `${themeColors.primaryColor}15`,
                    color: themeColors.primaryColor,
                    border: `1px solid ${themeColors.primaryColor}30`,
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RightSideContent);
