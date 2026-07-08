function RepositoryTable({ repositories }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 mt-10 shadow-lg">
      <h2 className="text-3xl font-bold mb-6">
        Top Repositories
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="text-left border-b border-slate-700">
              <th className="py-3">Repository</th>
              <th>Language</th>
              <th>Stars</th>
              <th>Forks</th>
              <th>Updated</th>
            </tr>
          </thead>

          <tbody>

            {repositories.slice(0,10).map((repo) => (

              <tr
                key={repo.id}
                className="border-b border-slate-800 hover:bg-slate-800"
              >
                <td className="py-4 font-semibold">
                  {repo.name}
                </td>

                <td>{repo.language || "-"}</td>

                <td>⭐ {repo.stargazers_count}</td>

                <td>🍴 {repo.forks_count}</td>

                <td>
                  {new Date(repo.updated_at)
                    .toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}

export default RepositoryTable;