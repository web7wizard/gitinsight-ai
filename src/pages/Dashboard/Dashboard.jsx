import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  getUserProfile,
  getUserRepositories,
} from "../../services/githubApi";

import DashboardLayout from "../../components/layout/DashboardLayout";

import ProfileCard from "../../components/profile/ProfileCard";
import StatsCards from "../../components/dashboard/StatsCards";
import AnalyticsCards from "../../components/dashboard/AnalyticsCards";
import ScoreCard from "../../components/dashboard/ScoreCard";
import DeveloperDNA from "../../components/dashboard/DeveloperDNA";
import LanguageChart from "../../components/charts/LanguageChart";
import AIInsights from "../../components/dashboard/AIInsights";
import Achievements from "../../components/dashboard/Achievements";
import RepositoryToolbar from "../../components/dashboard/RepositoryToolbar";
import RepositoryIntelligenceCard from "../../components/dashboard/RepositoryIntelligenceCard";

function Dashboard() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("user");

  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("stars");

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const profileData = await getUserProfile(username);
        const repoData = await getUserRepositories(username);

        repoData.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );

        setProfile(profileData);
        setRepositories(repoData);
      } catch (error) {
        console.error(error);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  const filteredRepositories = useMemo(() => {
    let repos = [...repositories];

    repos = repos.filter((repo) =>
      repo.name.toLowerCase().includes(search.toLowerCase())
    );

    switch (sort) {
      case "stars":
        repos.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        break;

      case "forks":
        repos.sort(
          (a, b) => b.forks_count - a.forks_count
        );
        break;

      case "updated":
        repos.sort(
          (a, b) =>
            new Date(b.updated_at) - new Date(a.updated_at)
        );
        break;

      case "name":
        repos.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      default:
        break;
    }

    return repos;
  }, [repositories, search, sort]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-red-500 text-2xl">
        User Not Found
      </div>
    );
  }

  return (
    <DashboardLayout>

      {/* Profile */}
      <section id="profile">
        <ProfileCard profile={profile} />
      </section>

      {/* Stats */}
      <section id="dashboard" className="mt-8">
        <StatsCards profile={profile} />
      </section>

      {/* Analytics */}
      <section id="analytics" className="mt-8">
        <AnalyticsCards repositories={repositories} />
      </section>

      {/* Score */}
      <section id="score" className="mt-8">
        <ScoreCard
          profile={profile}
          repositories={repositories}
        />
      </section>

      {/* Developer DNA */}
      <section id="dna" className="mt-8">
        <DeveloperDNA repositories={repositories} />
      </section>

      {/* Charts + AI */}
      <section
        id="ai"
        className="grid lg:grid-cols-2 gap-8 mt-8"
      >
        <LanguageChart repositories={repositories} />

        <AIInsights
          profile={profile}
          repositories={repositories}
        />
      </section>

      {/* Achievements */}
      <section id="achievements" className="mt-8">
        <Achievements
          profile={profile}
          repositories={repositories}
        />
      </section>

      {/* Repository Intelligence */}
      <section id="repositories" className="mt-12">

        <RepositoryToolbar
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
        />

        <h2 className="text-4xl font-bold mb-6">
          Repository Intelligence
        </h2>

        <div className="grid gap-8">
          {filteredRepositories.map((repo) => (
            <RepositoryIntelligenceCard
              key={repo.id}
              repo={repo}
            />
          ))}
        </div>

      </section>

    </DashboardLayout>
  );
}

export default Dashboard;