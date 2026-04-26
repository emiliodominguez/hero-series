(function () {
	const root = document.documentElement;
	const buttons = document.querySelectorAll(".foil-theme");
	const STORAGE_KEY = "foil-theme";

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

	const stage = document.querySelector("[data-foil]");
	if (!stage) return;

	let targetX = 0;
	let targetY = 0;
	let currentX = 0;
	let currentY = 0;
	let rafId = null;

	function render() {
		currentX += (targetX - currentX) * 0.1;
		currentY += (targetY - currentY) * 0.1;

		root.style.setProperty("--mouse-x", currentX.toFixed(3));
		root.style.setProperty("--mouse-y", currentY.toFixed(3));

		if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
			rafId = requestAnimationFrame(render);
		} else {
			rafId = null;
		}
	}

	function ensureRaf() {
		if (rafId === null) rafId = requestAnimationFrame(render);
	}

	stage.addEventListener("pointermove", function (event) {
		const rect = stage.getBoundingClientRect();
		const px = (event.clientX - rect.left) / rect.width;
		const py = (event.clientY - rect.top) / rect.height;
		targetX = (px - 0.5) * 2;
		targetY = (py - 0.5) * 2;
		ensureRaf();
	});

	stage.addEventListener("pointerleave", function () {
		targetX = 0;
		targetY = 0;
		ensureRaf();
	});
})();
