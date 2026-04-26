(function () {
	const root = document.documentElement;
	const buttons = document.querySelectorAll(".raw-theme");
	const STORAGE_KEY = "raw-theme";

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

	const clockEl = document.querySelector("[data-clock]");
	if (!clockEl) return;

	function pad(n) {
		return n < 10 ? "0" + n : "" + n;
	}

	function tickClock() {
		const now = new Date();
		clockEl.textContent =
			pad(now.getUTCHours()) +
			":" +
			pad(now.getUTCMinutes()) +
			":" +
			pad(now.getUTCSeconds()) +
			" UTC";
	}

	tickClock();
	setInterval(tickClock, 1000);
})();
