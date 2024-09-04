document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            burger.classList.toggle('toggle');
        });
    };

    const navLinkClick = () => {
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById(targetId).classList.add('active');
            });
        });
    };

    const loadPlants = () => {
        const plantGrid = document.querySelector('.plant-grid');
        const plants =
            [
                { name: 'Holy Basil (Tusli)', image: 'https://img.freepik.com/free-photo/fresh-green-parsley-grass_132075-5658.jpg?w=2000&t=st=1725466913~exp=1725467513~hmac=8e5fc79249d3924b14d900a724ba29e22e2fdf50948ebdad9fb7d3488ab8fa16' },

                { name: 'Monstera', image: 'https://example.com/monstera.jpg' },

                { name: 'Fiddle Leaf Fig', image: 'https://example.com/fiddle-leaf-fig.jpg' },

                { name: 'ZZ Plant', image: 'https://example.com/zz-plant.jpg' },

                { name: 'ZZ Plant', image: 'https://example.com/zz-plant.jpg' },
            ];

        plants.forEach(plant => {
            const plantCard = document.createElement('div');
            plantCard.classList.add('plant-card');
            plantCard.innerHTML = `
                <img src="${plant.image}" alt="${plant.name}">
                <h3>${plant.name}</h3>
            `;
            plantGrid.appendChild(plantCard);
        });
    };

    const initVirtualGarden = () => {
        const gardenContainer = document.querySelector('.garden-container');
        gardenContainer.innerHTML = '<p>Your virtual garden is empty. Add plants to get started!</p>';
    };

    navSlide();
    navLinkClick();
    loadPlants();
    initVirtualGarden();
});