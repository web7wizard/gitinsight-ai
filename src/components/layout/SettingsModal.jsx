function SettingsModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[420px] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold">⚙ Settings</h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">

          <div className="flex justify-between items-center">
            <span>Dark Theme</span>
            <span className="text-green-400 font-semibold">
              Enabled
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span>GitHub User</span>
            <span className="text-blue-400">
              {localStorage.getItem("githubUser") || "None"}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span>Version</span>
            <span className="text-slate-400">v1.0</span>
          </div>

          <div className="border-t border-slate-700 pt-5">
            <h3 className="font-semibold mb-2">
              About
            </h3>

            <p className="text-slate-400 text-sm leading-6">
              GitInsight AI helps analyze GitHub profiles,
              repositories, developer scores and AI-powered
              insights in one modern dashboard.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-700 text-center text-sm text-slate-500">
          Made with ❤️ by <span className="text-white">Javeriya Jamadar</span>
        </div>

      </div>
    </div>
  );
}

export default SettingsModal;