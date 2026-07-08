import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FaChartPie,
  FaGithub,
  FaRobot,
  FaCodeBranch,
  FaCog,
} from "react-icons/fa";

import SettingsModal from "./SettingsModal";

function Sidebar() {
  const [openSettings, setOpenSettings] = useState(false);

  const username = localStorage.getItem("githubUser");

  const menus = [
    {
      icon: <FaChartPie />,
      title: "Dashboard",
      link: username ? `/dashboard?user=${username}` : "/",
    },
    {
      icon: <FaGithub />,
      title: "Repositories",
      id: "repositories",
    },
    {
      icon: <FaRobot />,
      title: "AI Insights",
      id: "ai",
    },
    {
      icon: <FaCodeBranch />,
      title: "Compare",
      link: "/compare",
    },
  ];

  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <aside className="fixed left-0 top-0 w-72 h-screen bg-slate-900 border-r border-slate-800">

        <div className="p-8">
          <h1 className="text-3xl font-bold text-blue-500">
            GitInsight AI
          </h1>

          <p className="text-slate-400 mt-2">
            Developer Intelligence
          </p>
        </div>

        <nav className="px-4 mt-8">

          {menus.map((menu, index) => (

            menu.link ? (

              <NavLink
                key={index}
                to={menu.link}
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full p-4 rounded-xl transition mb-2 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-slate-800"
                  }`
                }
              >
                <span className="text-xl">
                  {menu.icon}
                </span>

                <span>{menu.title}</span>

              </NavLink>

            ) : (

              <button
                key={index}
                onClick={() => scrollTo(menu.id)}
                className="flex items-center gap-4 w-full p-4 rounded-xl hover:bg-slate-800 transition mb-2"
              >
                <span className="text-blue-400 text-xl">
                  {menu.icon}
                </span>

                <span>{menu.title}</span>

              </button>

            )

          ))}

          <button
            onClick={() => setOpenSettings(true)}
            className="flex items-center gap-4 w-full p-4 rounded-xl hover:bg-slate-800 transition mt-8"
          >
            <span className="text-blue-400 text-xl">
              <FaCog />
            </span>

            <span>Settings</span>

          </button>

        </nav>

      </aside>

      <SettingsModal
        open={openSettings}
        onClose={() => setOpenSettings(false)}
      />
    </>
  );
}

export default Sidebar;