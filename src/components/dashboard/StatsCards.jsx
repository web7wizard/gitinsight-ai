import { motion } from "framer-motion";
import {
  FaUsers,
  FaUserFriends,
  FaBook,
  FaCodeBranch
} from "react-icons/fa";

function StatsCards({ profile }) {
  const cards = [
    {
      title: "Followers",
      value: profile.followers,
      icon: <FaUsers />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Following",
      value: profile.following,
      icon: <FaUserFriends />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Repositories",
      value: profile.public_repos,
      icon: <FaBook />,
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Public Gists",
      value: profile.public_gists,
      icon: <FaCodeBranch />,
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          whileHover={{
            scale: 1.04,
            y: -6,
          }}
          className={`rounded-3xl p-6 bg-gradient-to-br ${card.color} shadow-xl`}
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-white/80">
                {card.title}
              </p>

              <h2 className="text-5xl font-bold mt-3">
                {card.value}
              </h2>

            </div>

            <div className="text-5xl opacity-80">
              {card.icon}
            </div>

          </div>

        </motion.div>

      ))}

    </div>
  );
}

export default StatsCards;