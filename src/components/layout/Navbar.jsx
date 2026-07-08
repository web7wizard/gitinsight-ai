function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">
      <div className="h-20 flex justify-between items-center px-10">

        <div>
          <h2 className="text-3xl font-bold">
            Developer Dashboard
          </h2>

          <p className="text-slate-400">
            Analyze GitHub profiles with AI
          </p>
        </div>

      </div>
    </header>
  );
}

export default Navbar;