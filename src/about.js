const aboutContainer = document.createElement('div');
aboutContainer.classList.add('about-container');

const title = document.createElement('h1');
title.textContent = 'About us';

aboutContainer.appendChild(title);

export { aboutContainer };