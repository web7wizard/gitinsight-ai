function AIInsights({ profile, repositories }) {
  const totalStars = repositories.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const languageCount = new Set(
    repositories
      .map((repo) => repo.language)
      .filter(Boolean)
  ).size;

  const insights = [];

  if (profile.followers > 100) {
    insights.push("🌟 Excellent community engagement.");
  } else {
    insights.push("📢 Increase your GitHub visibility by sharing projects.");
  }

  if (profile.public_repos >= 20) {
    insights.push("📂 Great number of public repositories.");
  } else {
    insights.push("➕ Build more public repositories to showcase your work.");
  }

  if (languageCount >= 5) {
    insights.push("💻 Strong programming language diversity.");
  } else {
    insights.push("🧠 Explore more programming languages.");
  }

  if (totalStars >= 100) {
    insights.push("⭐ Your repositories are gaining good attention.");
  } else {
    insights.push("🚀 Improve documentation to attract more stars.");
  }

  if (profile.bio) {
    insights.push("✅ GitHub profile has a bio.");
  } else {
    insights.push("✍️ Add a GitHub bio for a stronger profile.");
  }

  return (
    <div className="bg-slate-900 rounded-2xl p-8 mt-10 shadow-lg">
      <h2 className="text-3xl font-bold mb-6">
        AI Insights
      </h2>

      <div className="space-y-4">
        {insights.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg p-4"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIInsights;