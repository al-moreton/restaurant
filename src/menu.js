const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

const title = document.createElement('h1');
title.textContent = 'Menu';

menuContainer.appendChild(title);

export { menuContainer };