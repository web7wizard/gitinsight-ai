import { motion } from "framer-motion";
import {
  FaGithub,
  FaMapMarkerAlt,
  FaBuilding,
  FaLink,
  FaUsers,
  FaBook,
  FaStar
} from "react-icons/fa";

function ProfileCard({ profile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 shadow-2xl"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* Left */}

        <div className="flex gap-6">

          <img
            src={profile.avatar_url}
            alt={profile.login}
            className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-xl"
          />

          <div>

            <div className="flex items-center gap-3">

              <h1 className="text-4xl font-bold">
                {profile.name || profile.login}
              </h1>

              <span className="px-3 py-1 rounded-full bg-green-600 text-sm">
                Active
              </span>

            </div>

            <p className="text-slate-400 text-lg mt-1">
              @{profile.login}
            </p>

            <p className="mt-5 text-slate-300 max-w-xl">
              {profile.bio || "No bio available."}
            </p>

            <div className="flex flex-wrap gap-6 mt-6 text-slate-400">

              {profile.location && (
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  {profile.location}
                </span>
              )}

              {profile.company && (
                <span className="flex items-center gap-2">
                  <FaBuilding />
                  {profile.company}
                </span>
              )}

              {profile.blog && (
                <a
                  href={profile.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:underline"
                >
                  <FaLink />
                  Website
                </a>
              )}

            </div>

            <a
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
            >
              <FaGithub />
              View GitHub Profile
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-4 min-w-[260px]">

          <div className="bg-slate-800 rounded-2xl p-5 text-center">
            <FaUsers className="mx-auto text-blue-400 text-2xl mb-2" />
            <h3 className="text-3xl font-bold">
              {profile.followers}
            </h3>
            <p className="text-slate-400">Followers</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5 text-center">
            <FaUsers className="mx-auto text-green-400 text-2xl mb-2" />
            <h3 className="text-3xl font-bold">
              {profile.following}
            </h3>
            <p className="text-slate-400">Following</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5 text-center">
            <FaBook className="mx-auto text-yellow-400 text-2xl mb-2" />
            <h3 className="text-3xl font-bold">
              {profile.public_repos}
            </h3>
            <p className="text-slate-400">Repositories</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-5 text-center">
            <FaStar className="mx-auto text-orange-400 text-2xl mb-2" />
            <h3 className="text-3xl font-bold">
              {profile.public_gists}
            </h3>
            <p className="text-slate-400">Public Gists</p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default ProfileCard;