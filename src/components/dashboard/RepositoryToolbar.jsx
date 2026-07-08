import { FaSearch } from "react-icons/fa";

function RepositoryToolbar({
  search,
  setSearch,
  sort,
  setSort,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">

      <div className="relative w-full md:w-96">

        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search repositories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-700 outline-none text-white"
        />

      </div>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="bg-slate-900 border border-slate-700 rounded-xl px-5 text-white"
      >
        <option value="stars">⭐ Most Stars</option>
        <option value="forks">🍴 Most Forks</option>
        <option value="name">🔤 Name A-Z</option>
        <option value="updated">📅 Recently Updated</option>
      </select>

    </div>
  );
}

export default RepositoryToolbar;