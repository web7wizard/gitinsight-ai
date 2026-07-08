function Achievements({ profile, repositories }) {
  const totalStars = repositories.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const languages = new Set(
    repositories
      .map((repo) => repo.language)
      .filter(Boolean)
  ).size;

  const achievements = [];

  if (profile.public_repos >= 50)
    achievements.push("🏅 Open Source Enthusiast");

  if (totalStars >= 100)
    achievements.push("⭐ Star Collector");

  if (profile.followers >= 500)
    achievements.push("🌍 Community Builder");

  if (languages >= 5)
    achievements.push("💻 Polyglot Developer");

  const recentlyUpdated = repositories.some((repo) => {
    const updated = new Date(repo.updated_at);
    const now = new Date();
    return (now - updated) / (1000 * 60 * 60 * 24) <= 30;
  });

  if (recentlyUpdated)
    achievements.push("🔥 Active Developer");

  const hasLicense = repositories.some((repo) => repo.license);

  if (hasLicense)
    achievements.push("📚 Documentation Master");

  return (
    <div className="bg-slate-900 rounded-2xl p-8 mt-10 shadow-lg">
      <h2 className="text-3xl font-bold mb-6">
        GitHub Achievements
      </h2>

      {achievements.length === 0 ? (
        <p className="text-slate-400">
          No achievements unlocked yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition"
            >
              {achievement}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Achievements;
