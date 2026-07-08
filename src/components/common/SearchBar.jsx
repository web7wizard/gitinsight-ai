import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!username.trim()) return;

    navigate(`/dashboard?user=${username}`);
  };

  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
      <input
        type="text"
        placeholder="Enter GitHub Username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="flex-1 px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500"
      />

      <button
        onClick={handleSearch}
        className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
      >
        Analyze
      </button>
    </div>
  );
}

export default SearchBar;