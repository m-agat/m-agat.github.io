(function () {
  const root = document.documentElement;
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const themeToggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") root.dataset.theme = saved;

  function setTheme(next) {
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
    if (themeToggle) themeToggle.querySelector(".icon").textContent = next === "light" ? "☀" : "☾";
  }

  if (themeToggle) {
    const initial = root.dataset.theme || "dark";
    themeToggle.querySelector(".icon").textContent = initial === "light" ? "☀" : "☾";

    themeToggle.addEventListener("click", () => {
      const current = root.dataset.theme || "dark";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  const copyBtn = document.getElementById("copyTemplate");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const text =
        "Hi Agata — I found your work on uncertainty visualization in radiotherapy. " +
        "I’m interested in discussing [topic]. Are you open to a short call next week?";
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copied ✓";
        setTimeout(() => (copyBtn.textContent = "Copy text"), 1400);
      } catch {
        copyBtn.textContent = "Copy failed";
        setTimeout(() => (copyBtn.textContent = "Copy text"), 1400);
      }
    });
  }
})();

