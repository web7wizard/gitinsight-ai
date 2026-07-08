function RepositoryHealthCard({ repo }) {
  let score = 0;

  if (repo.stargazers_count >= 10) score += 20;

  if (repo.forks_count >= 5) score += 20;

  if (repo.open_issues_count <= 5) score += 20;

  if (repo.license) score += 20;

  if (repo.homepage) score += 20;

  let status = "Needs Improvement";

  if (score >= 80) status = "Excellent";
  else if (score >= 60) status = "Good";
  else if (score >= 40) status = "Average";

  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg">

      <div className="flex justify-between">

        <h2 className="text-2xl font-bold">
          {repo.name}
        </h2>

        <span className="text-green-400 font-bold">
          {status}
        </span>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <p>⭐ {repo.stargazers_count}</p>

        <p>🍴 {repo.forks_count}</p>

        <p>👀 {repo.watchers_count}</p>

        <p>🐞 {repo.open_issues_count}</p>

        <p>💻 {repo.language || "N/A"}</p>

        <p>
          🔒 {repo.license?.name || "None"}
        </p>

      </div>

      {repo.homepage && (
        <a
          href={repo.homepage}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 text-blue-400"
        >
          🌐 Live Demo
        </a>
      )}

      <div className="mt-5">

        <div className="w-full bg-slate-700 rounded-full h-3">

          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: `${score}%` }}
          />

        </div>

        <p className="mt-2 text-sm">
          Repository Health Score: {score}/100
        </p>

      </div>

    </div>
  );
}

export default RepositoryHealthCard;