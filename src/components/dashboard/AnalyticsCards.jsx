function AnalyticsCards({ repositories }) {
  const totalStars = repositories.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const totalForks = repositories.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  const languageSet = new Set(
    repositories
      .map((repo) => repo.language)
      .filter(Boolean)
  );

  const cards = [
    {
      title: "Total Stars",
      value: totalStars,
      icon: "⭐",
    },
    {
      title: "Total Forks",
      value: totalForks,
      icon: "🍴",
    },
    {
      title: "Languages",
      value: languageSet.size,
      icon: "💻",
    },
    {
      title: "Repositories",
      value: repositories.length,
      icon: "📁",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mt-10">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-slate-900 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition"
        >
          <div className="text-4xl">{card.icon}</div>

          <h3 className="mt-4 text-slate-400">
            {card.title}
          </h3>

          <p className="text-4xl font-bold mt-3 text-blue-400">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AnalyticsCards;