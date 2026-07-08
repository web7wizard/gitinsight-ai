import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function LanguageChart({ repositories }) {
  const languageCount = {};

  repositories.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  const data = Object.keys(languageCount).map((language) => ({
    name: language,
    value: languageCount[language],
  }));

  const COLORS = [
    "#3b82f6",
    "#8b5cf6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#06b6d4",
    "#ec4899",
    "#84cc16",
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-8 mt-10 shadow-lg">

      <h2 className="text-3xl font-bold mb-6">
        Language Distribution
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={140}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default LanguageChart;