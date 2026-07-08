function RepositoryList({ repositories }) {
    return (
        <div className="mt-10">

            <h2 className="text-3xl font-bold mb-6">
                Top Repositories
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

                {repositories.map((repo) => (

                    <div
                        key={repo.id}
                        className="bg-slate-900 rounded-xl p-6 shadow-lg hover:scale-105 transition"
                    >

                        <h3 className="text-xl font-bold text-blue-400">
                            {repo.name}
                        </h3>

                        <p className="text-slate-400 mt-3">
                            {repo.description || "No description"}
                        </p>

                        <div className="flex justify-between mt-5">

                            <span>
                                ⭐ {repo.stargazers_count}
                            </span>

                            <span>
                                🍴 {repo.forks_count}
                            </span>

                            <span>
                                {repo.language}
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default RepositoryList;