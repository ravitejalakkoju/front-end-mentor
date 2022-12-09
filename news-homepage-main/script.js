function openMenu(event) {
	toggleMenuBar(event);
	document.getElementById('js-mobile-nav').classList.toggle('mobile-nav');
	document.getElementById('js-grid').classList.toggle('menu-open');
}
function toggleMenuBar(event) {
	event.classList.toggle('change');
}