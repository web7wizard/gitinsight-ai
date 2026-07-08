import SearchBar from "./SearchBar";
function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 flex flex-col justify-center items-center text-center px-6">

      <p className="text-blue-400 font-semibold mb-4">
        Developer Analytics Platform
      </p>

      <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
        See Your GitHub
        <br />
        Through a Smarter Lens.
      </h1>

      <p className="text-slate-400 mt-8 max-w-2xl text-lg">
        Analyze repositories, contributions, languages, achievements,
        and receive intelligent insights to improve your GitHub profile.
      </p>
      <SearchBar />

    </section>
  );
}

export default Hero;