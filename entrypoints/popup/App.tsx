import { useState, useEffect } from "react";

function App() {
  const [isZenMode, setIsZenMode] = useState(false);

  useEffect(() => {
    storage.getItem("local:zen-mode-status").then((status) => {
      setIsZenMode(status === "activated");
    });
  }, []);

  const handleToggle = async () => {
    const newStatus = !isZenMode;
    await storage.setItem(
      "local:zen-mode-status",
      newStatus ? "activated" : "not-activated",
    );
    setIsZenMode(newStatus);

    // Get all YouTube tabs and reload them
    const youtubeTabs = await browser.tabs.query({
      url: "*://*.youtube.com/*",
    });
    await Promise.all(
      youtubeTabs.map((tab) => tab.id && browser.tabs.reload(tab.id)),
    );
  };

  return (
    <div className="w-80 rounded-xl bg-white p-6 shadow-sm border border-slate-100 select-none">
      {/* Header Section */}
      <div className="mb-6 text-left">
        <h1 className="text-lg font-semibold text-slate-900 tracking-tight">
          Zen YouTube
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Hide distractions and focus on your content
        </p>
      </div>

      {/* Control Card */}
      <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4 border border-slate-100">
        <div className="flex flex-col text-left">
          <span className="text-sm font-medium text-slate-700">
            Distraction-Free Mode
          </span>
          <span className="text-xs text-slate-400">
            {isZenMode ? "Active" : "Inactive"}
          </span>
        </div>

        {/* Toggle Switch */}
        <label className="relative inline-flex items-center cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isZenMode}
            onChange={handleToggle}
            className="sr-only peer"
          />
          <div
            className="
            w-11 h-6 bg-slate-200 rounded-full transition-colors duration-200
            peer-focus:outline-none 
            peer-checked:bg-emerald-500
            after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
            after:bg-white after:rounded-full after:h-5 after:w-5 
            after:transition-transform after:duration-200 after:shadow-sm
            peer-checked:after:translate-x-full
          "
          ></div>
        </label>
      </div>
    </div>
  );
}

export default App;
