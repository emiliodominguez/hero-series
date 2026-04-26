(function () {
	const root = document.documentElement;
	const buttons = document.querySelectorAll(".reveal-theme");
	const STORAGE_KEY = "reveal-theme";

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

	const stage = document.querySelector("[data-reveal]");
	const coords = document.querySelector("[data-coords]");
	if (!stage) return;

	let targetX = window.innerWidth / 2;
	let targetY = window.innerHeight / 2;
	let currentX = targetX;
	let currentY = targetY;
	let rafId = null;

	function pad(n) {
		const s = Math.round(n).toString();
		return s.padStart(4, "0");
	}

	function render() {
		currentX += (targetX - currentX) * 0.18;
		currentY += (targetY - currentY) * 0.18;

		root.style.setProperty("--mx", currentX.toFixed(1) + "px");
		root.style.setProperty("--my", currentY.toFixed(1) + "px");

		if (coords) {
			coords.textContent = pad(currentX) + " · " + pad(currentY);
		}

		if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
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
		targetX = event.clientX - rect.left;
		targetY = event.clientY - rect.top;
		ensureRaf();
	});

	stage.addEventListener("pointerleave", function () {
		targetX = window.innerWidth / 2;
		targetY = window.innerHeight / 2;
		ensureRaf();
	});

	// hover detection — illuminate the pointer over interactive elements
	const hoverables = stage.querySelectorAll("[data-hover]");
	hoverables.forEach(function (el) {
		el.addEventListener("pointerenter", function () {
			stage.classList.add("is-hovering");
		});
		el.addEventListener("pointerleave", function () {
			stage.classList.remove("is-hovering");
		});
	});

	// initial center
	root.style.setProperty("--mx", currentX + "px");
	root.style.setProperty("--my", currentY + "px");
})();
