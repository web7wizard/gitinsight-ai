function AIVerdict({ profile1, profile2, score1, score2 }) {

  let winner = score1 > score2 ? profile1 : profile2;

  let loser = score1 > score2 ? profile2 : profile1;

  if (score1 === score2) {
    return (
      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 mt-10">

        <h2 className="text-3xl font-bold mb-4">
          🤖 GitInsight AI Verdict
        </h2>

        <p className="text-slate-300 leading-8">
          Both developers have almost identical GitHub strength.
          Neither has a clear advantage based on repositories,
          followers and overall activity.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 mt-10">

      <h2 className="text-3xl font-bold mb-4">
        🤖 GitInsight AI Verdict
      </h2>

      <p className="text-slate-300 leading-8">

        <span className="font-bold text-green-400">
          {winner.login}
        </span>

        {" "}appears to have a stronger GitHub profile than{" "}

        <span className="font-bold text-red-400">
          {loser.login}
        </span>

        .

        <br /><br />

        This is because the developer has a better combination of
        followers, repositories, and overall GitHub presence.

        <br /><br />

        Keep contributing consistently to improve repository quality,
        gain followers, and increase developer visibility.

      </p>

    </div>
  );
}

export default AIVerdict;