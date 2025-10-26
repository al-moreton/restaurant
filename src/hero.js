const heroBanner = document.createElement('div');
heroBanner.classList.add('hero-banner');

const heroText = document.createElement('div');
heroText.classList.add('hero-text');

const heroSuptitle = document.createElement('div');
heroSuptitle.classList.add('hero-suptitle');
heroSuptitle.textContent = 'Welcome';

const heroTitle = document.createElement('h1');
heroTitle.classList.add('hero-title');
heroTitle.textContent = 'Pico Burrito';

const heroSubtitle = document.createElement('h2');
heroSubtitle.classList.add('hero-subtitle');
heroSubtitle.textContent = 'Fresh, flavourful, and fully-loaded. Hand-rolled burritos inspired by the streets of Mexico.';

const buttonPrimary = document.createElement('button');
buttonPrimary.className = 'button button-primary hero-button';
buttonPrimary.textContent = 'Order now';

const buttonSecondary = document.createElement('button');
buttonSecondary.className = 'button button-secondary hero-button';
buttonSecondary.textContent = 'Book a table';

heroText.appendChild(heroSuptitle);
heroText.appendChild(heroTitle);
heroText.appendChild(heroSubtitle);
heroText.appendChild(buttonPrimary);
heroText.appendChild(buttonSecondary);

heroBanner.appendChild(heroText);

export { heroBanner };