const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
	cursor.style.left = `${e.clientX + window.scrollX}px`;
	cursor.style.top = `${e.clientY + window.scrollY}px`;
});