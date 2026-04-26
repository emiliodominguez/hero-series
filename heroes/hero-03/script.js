(function () {
	const root = document.documentElement;
	const themeButtons = document.querySelectorAll(".depth-theme");
	const STORAGE_KEY = "depth-theme";

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

	const stage = document.querySelector("[data-tilt]");
	const scene = stage ? stage.querySelector(".depth-scene") : null;
	const readout = document.querySelector("[data-tilt-readout]");
	if (!stage || !scene) return;

	const MAX_TILT = 12;
	let targetX = 0;
	let targetY = 0;
	let currentX = 0;
	let currentY = 0;
	let rafId = null;

	function render() {
		currentX += (targetX - currentX) * 0.08;
		currentY += (targetY - currentY) * 0.08;

		scene.style.setProperty("--tilt-x", currentX.toFixed(2) + "deg");
		scene.style.setProperty("--tilt-y", currentY.toFixed(2) + "deg");

		if (readout) {
			readout.textContent = currentY.toFixed(2) + " · " + (-currentX).toFixed(2);
		}

		if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
			rafId = requestAnimationFrame(render);
		} else {
			rafId = null;
		}
	}

	function ensureRaf() {
		if (rafId === null) rafId = requestAnimationFrame(render);
	}

	function handlePointer(event) {
		const rect = stage.getBoundingClientRect();
		const px = (event.clientX - rect.left) / rect.width;
		const py = (event.clientY - rect.top) / rect.height;
		targetY = (px - 0.5) * MAX_TILT * 2;
		targetX = -(py - 0.5) * MAX_TILT * 2;
		ensureRaf();
	}

	function handleLeave() {
		targetX = 0;
		targetY = 0;
		ensureRaf();
	}

	stage.addEventListener("pointermove", handlePointer);
	stage.addEventListener("pointerleave", handleLeave);

	window.addEventListener(
		"deviceorientation",
		function (event) {
			if (window.matchMedia("(pointer: fine)").matches) return;
			if (event.beta == null || event.gamma == null) return;
			const beta = Math.max(-30, Math.min(30, event.beta - 30));
			const gamma = Math.max(-30, Math.min(30, event.gamma));
			targetX = -(beta / 30) * MAX_TILT;
			targetY = (gamma / 30) * MAX_TILT;
			ensureRaf();
		},
		true
	);
})();
