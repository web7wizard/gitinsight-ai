import { useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import CompareCard from "../../components/compare/CompareCard";
import BattleStats from "../../components/compare/BattleStats";
import AIVerdict from "../../components/compare/AIVerdict";

import { getUserProfile } from "../../services/githubApi";

function Compare() {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  const [profile1, setProfile1] = useState(null);
  const [profile2, setProfile2] = useState(null);

  const [loading, setLoading] = useState(false);

  const compareUsers = async () => {
    if (!user1 || !user2) return;

    try {
      setLoading(true);

      const first = await getUserProfile(user1);
      const second = await getUserProfile(user2);

      setProfile1(first);
      setProfile2(second);
    } catch {
      alert("User not found");
    } finally {
      setLoading(false);
    }
  };

  const calculateScore = (profile) => {
    return (
      profile.followers * 5 +
      profile.public_repos * 3 +
      profile.public_gists +
      profile.following
    );
  };

  const score1 = profile1 ? calculateScore(profile1) : 0;
  const score2 = profile2 ? calculateScore(profile2) : 0;

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h1 className="text-5xl font-bold">
          ⚔ Developer Battle
        </h1>

        <p className="text-slate-400 mt-2 mb-10">
          Compare two GitHub developers using GitInsight AI.
        </p>

        {/* Search */}

        <div className="grid md:grid-cols-3 gap-5">

          <input
            value={user1}
            onChange={(e) => setUser1(e.target.value)}
            placeholder="First GitHub Username"
            className="bg-slate-900 p-4 rounded-xl border border-slate-800 focus:outline-none"
          />

          <input
            value={user2}
            onChange={(e) => setUser2(e.target.value)}
            placeholder="Second GitHub Username"
            className="bg-slate-900 p-4 rounded-xl border border-slate-800 focus:outline-none"
          />

          <button
            onClick={compareUsers}
            className="bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
          >
            {loading ? "Comparing..." : "Compare"}
          </button>

        </div>

        {/* Results */}

        {profile1 && profile2 && (
          <>

            {/* Winner */}

            <div className="mt-10 text-center">

              <h2 className="text-4xl font-bold">

                🏆 Winner :

                <span className="text-green-400 ml-2">

                  {score1 > score2
                    ? profile1.login
                    : score2 > score1
                    ? profile2.login
                    : "Tie"}

                </span>

              </h2>

            </div>

            {/* Cards */}

            <div className="grid lg:grid-cols-2 gap-10 mt-10">

              {/* Developer 1 */}

              <div>

                <CompareCard
                  profile={profile1}
                  color="border-blue-500"
                />

                <BattleStats profile={profile1} />

                <div className="mt-6 bg-slate-900 rounded-2xl p-6 text-center border border-slate-800">

                  <h3 className="text-xl text-slate-400">
                    Developer Score
                  </h3>

                  <p className="text-5xl font-bold text-blue-400 mt-3">
                    {score1}
                  </p>

                </div>

              </div>

              {/* Developer 2 */}

              <div>

                <CompareCard
                  profile={profile2}
                  color="border-green-500"
                />

                <BattleStats profile={profile2} />

                <div className="mt-6 bg-slate-900 rounded-2xl p-6 text-center border border-slate-800">

                  <h3 className="text-xl text-slate-400">
                    Developer Score
                  </h3>

                  <p className="text-5xl font-bold text-green-400 mt-3">
                    {score2}
                  </p>

                </div>

              </div>

            </div>

            {/* AI Verdict */}

            <AIVerdict
              profile1={profile1}
              profile2={profile2}
              score1={score1}
              score2={score2}
            />

          </>
        )}

      </div>
    </DashboardLayout>
  );
}

export default Compare;