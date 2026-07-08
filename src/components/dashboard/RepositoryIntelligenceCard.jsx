import { motion } from "framer-motion";
import {
  FaStar,
  FaCodeBranch,
  FaEye,
  FaBug,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { analyzeRepository } from "../../utils/repositoryAnalyzer";

function RepositoryIntelligenceCard({ repo }) {
  const analysis = analyzeRepository(repo);

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{ duration: 0.2 }}
      className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl"
    >
      {/* Header */}

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-2xl font-bold">
            {repo.name}
          </h2>

          <p className="text-slate-400 mt-2">
            {repo.description || "No description available"}
          </p>

        </div>

        <div className="text-right">

          <div className="text-5xl font-bold text-blue-400">
            {analysis.score}
          </div>

          <div className="text-yellow-400 font-semibold">
            Grade {analysis.grade}
          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

        <div className="bg-slate-800 rounded-xl p-4 text-center">

          <FaStar className="mx-auto mb-2 text-yellow-400" />

          {repo.stargazers_count}

        </div>

        <div className="bg-slate-800 rounded-xl p-4 text-center">

          <FaCodeBranch className="mx-auto mb-2 text-green-400" />

          {repo.forks_count}

        </div>

        <div className="bg-slate-800 rounded-xl p-4 text-center">

          <FaEye className="mx-auto mb-2 text-cyan-400" />

          {repo.watchers_count}

        </div>

        <div className="bg-slate-800 rounded-xl p-4 text-center">

          <FaBug className="mx-auto mb-2 text-red-400" />

          {repo.open_issues_count}

        </div>

      </div>

      {/* Language + Updated */}

      <div className="flex flex-wrap gap-4 mt-8">

        <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
          {repo.language || "Unknown"}
        </span>

        <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">
          Updated {new Date(repo.updated_at).toLocaleDateString()}
        </span>

      </div>

      {/* Health */}

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span>Repository Health</span>

          <span>{analysis.score}%</span>

        </div>

        <div className="w-full bg-slate-800 rounded-full h-3">

          <div
            className="bg-green-500 h-3 rounded-full"
            style={{
              width: `${analysis.score}%`,
            }}
          />

        </div>

      </div>

      {/* Strengths */}

      <div className="mt-8">

        <h3 className="font-bold text-green-400 mb-3">
          Strengths
        </h3>

        <div className="flex flex-wrap gap-2">

          {analysis.strengths.map((item) => (

            <span
              key={item}
              className="bg-green-900 px-3 py-2 rounded-full text-sm"
            >
              ✓ {item}
            </span>

          ))}

        </div>

      </div>

      {/* Improvements */}

      <div className="mt-6">

        <h3 className="font-bold text-red-400 mb-3">
          Improvements
        </h3>

        <div className="flex flex-wrap gap-2">

          {analysis.improvements.map((item) => (

            <span
              key={item}
              className="bg-red-900 px-3 py-2 rounded-full text-sm"
            >
              {item}
            </span>

          ))}

        </div>

      </div>

      {/* Button */}

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
      >
        Open Repository

        <FaExternalLinkAlt />

      </a>

    </motion.div>
  );
}

export default RepositoryIntelligenceCard;