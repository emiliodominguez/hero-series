(function () {
	const root = document.documentElement;
	const themeButtons = document.querySelectorAll(".vhs-theme");
	const STORAGE_KEY = "vhs-theme";

	function applyTheme(theme) {
		root.dataset.theme = theme;
		themeButtons.forEach(function (b) {
			b.classList.toggle("is-active", b.dataset.theme === theme);
		});
	}

	let saved = null;
	try {
		saved = localStorage.getItem(STORAGE_KEY);
	} catch (e) {}
	if (saved) applyTheme(saved);

	themeButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			const theme = button.dataset.theme;
			applyTheme(theme);
			try {
				localStorage.setItem(STORAGE_KEY, theme);
			} catch (e) {}
		});
	});

	const tcEl = document.querySelector("[data-tc]");
	if (!tcEl) return;

	const start = Date.now();

	function pad(n) {
		return n < 10 ? "0" + n : "" + n;
	}

	function tick() {
		const elapsed = Math.floor((Date.now() - start) / 1000);
		const h = Math.floor(elapsed / 3600);
		const m = Math.floor((elapsed % 3600) / 60);
		const s = elapsed % 60;
		const f = Math.floor(((Date.now() - start) % 1000) / (1000 / 30));
		tcEl.textContent = pad(h) + ":" + pad(m) + ":" + pad(s) + ":" + pad(f);
		requestAnimationFrame(tick);
	}

	tick();
})();
