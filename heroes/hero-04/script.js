(function () {
	const root = document.documentElement;
	const buttons = document.querySelectorAll(".goo-theme");
	const STORAGE_KEY = "goo-theme";

	function applyTheme(theme) {
		root.dataset.theme = theme;
		buttons.forEach(function (b) {
			b.classList.toggle("is-active", b.dataset.theme === theme);
		});
	}

	let saved = null;
	try {
		saved = localStorage.getItem(STORAGE_KEY);
	} catch (e) {}
	if (saved) applyTheme(saved);

	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			const theme = button.dataset.theme;
			applyTheme(theme);
			try {
				localStorage.setItem(STORAGE_KEY, theme);
			} catch (e) {}
		});
	});
})();
