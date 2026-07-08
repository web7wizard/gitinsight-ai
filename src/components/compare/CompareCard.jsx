import { motion } from "framer-motion";

function CompareCard({ profile, color }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl"
    >
      <div className="flex flex-col items-center">

        <img
          src={profile.avatar_url}
          alt={profile.login}
          className={`w-32 h-32 rounded-full border-4 ${color}`}
        />

        <h2 className="text-3xl font-bold mt-5">
          {profile.name || profile.login}
        </h2>

        <p className="text-slate-400">
          @{profile.login}
        </p>

        <a
          href={profile.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 text-blue-400 hover:underline"
        >
          View GitHub Profile
        </a>

      </div>
    </motion.div>
  );
}

export default CompareCard;