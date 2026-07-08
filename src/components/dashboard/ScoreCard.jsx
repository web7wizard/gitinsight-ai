import { motion } from "framer-motion";
import { FaAward, FaStar } from "react-icons/fa";

function ScoreCard({ profile, repositories }) {
  const totalStars = repositories.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const totalForks = repositories.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  let score =
    profile.followers * 0.15 +
    profile.public_repos * 2 +
    totalStars * 0.6 +
    totalForks * 0.3;

  score = Math.min(100, Math.round(score));

  let level = "Beginner";
  let color = "text-gray-300";

  if (score >= 90) {
    level = "Elite Developer";
    color = "text-yellow-400";
  } else if (score >= 75) {
    level = "Expert";
    color = "text-green-400";
  } else if (score >= 60) {
    level = "Advanced";
    color = "text-blue-400";
  } else if (score >= 40) {
    level = "Intermediate";
    color = "text-orange-400";
  }

  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-8 bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-xl"
    >
      <h2 className="text-3xl font-bold mb-8">
        Developer Score
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Circular Progress */}

        <div className="flex justify-center">

          <div className="relative w-44 h-44">

            <svg className="w-44 h-44 rotate-[-90deg]">

              <circle
                cx="88"
                cy="88"
                r="70"
                stroke="#1e293b"
                strokeWidth="14"
                fill="transparent"
              />

              <motion.circle
                cx="88"
                cy="88"
                r="70"
                stroke="#3b82f6"
                strokeWidth="14"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                animate={{
                  strokeDashoffset: offset,
                }}
                transition={{
                  duration: 1.5,
                }}
              />

            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <h1 className="text-5xl font-bold">
                {score}
              </h1>

              <p className="text-slate-400">
                /100
              </p>

            </div>

          </div>

        </div>

        {/* Details */}

        <div>

          <div className="flex items-center gap-3 mb-6">

            <FaAward
              className={`${color} text-4xl`}
            />

            <div>

              <h2 className={`text-3xl font-bold ${color}`}>
                {level}
              </h2>

              <p className="text-slate-400">
                Overall GitHub Performance
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-5 mt-8">

            <div className="bg-slate-800 rounded-2xl p-5">
              <p className="text-slate-400">
                ⭐ Total Stars
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {totalStars}
              </h3>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              <p className="text-slate-400">
                🍴 Total Forks
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {totalForks}
              </h3>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              <p className="text-slate-400">
                📁 Repositories
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {profile.public_repos}
              </h3>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              <p className="text-slate-400">
                <FaStar className="inline mr-2" />
                Rank
              </p>

              <h3 className={`text-3xl font-bold mt-2 ${color}`}>
                {level}
              </h3>
            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default ScoreCard;