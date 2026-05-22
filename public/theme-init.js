(() => {
  try {
    const storedTheme = window.localStorage.getItem("valueages-theme");
    const theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }
})();
