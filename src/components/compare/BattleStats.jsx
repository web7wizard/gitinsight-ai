function BattleStats({ profile }) {

  const stats = [
    {
      title: "Followers",
      value: profile.followers,
    },
    {
      title: "Following",
      value: profile.following,
    },
    {
      title: "Repositories",
      value: profile.public_repos,
    },
    {
      title: "Gists",
      value: profile.public_gists,
    },
  ];

  return (

    <div className="grid grid-cols-2 gap-5 mt-8">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-slate-800 rounded-2xl p-5 text-center"
        >

          <h3 className="text-slate-400">
            {item.title}
          </h3>

          <p className="text-3xl font-bold mt-2">
            {item.value}
          </p>

        </div>

      ))}

    </div>

  );
}

export default BattleStats;