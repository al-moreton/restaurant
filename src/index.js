import "./styles.css";
import "./hero-banner.css";
import './about.css';
import './menu.css';
import { heroBanner } from './hero';
import { menuContainer } from './menu';
import { aboutContainer } from './about';

class App {
    constructor() {
        this.name = 'Pico Burrito';
    }

    init() {
        const contentDiv = document.querySelector('#content');
        contentDiv.appendChild(heroBanner);

        const navigation = document.querySelector('.top-navigation');

        navigation.addEventListener('click', (e) => {
            if (e.target.classList.contains('item-home')) {
                contentDiv.textContent = '';
                contentDiv.appendChild(heroBanner);
            }
            if (e.target.classList.contains('item-menu')) {
                contentDiv.textContent = '';
                contentDiv.appendChild(menuContainer);
            }
            if (e.target.classList.contains('item-about')) {
                contentDiv.textContent = '';
                contentDiv.appendChild(aboutContainer);
            }
        })
    }
}

const picoBurrito = new App();
picoBurrito.init();