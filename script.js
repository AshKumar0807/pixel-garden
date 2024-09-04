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
        const plants = [
            { name: 'Holy Basil (Tulsi)', image: 'https://img.freepik.com/free-photo/fresh-green-parsley-grass_132075-5658.jpg?w=2000&t=st=1725466913~exp=1725467513~hmac=8e5fc79249d3924b14d900a724ba29e22e2fdf50948ebdad9fb7d3488ab8fa16', description: 'Holy Basil, also known as Tulsi, is revered in many cultures for its medicinal properties. It is commonly used in Ayurveda and Homeopathy to promote health and well-being.', attributes: ['Ayurveda', 'Homeopathy'] },
            { name: 'Cardamom', image: 'https://img.freepik.com/free-photo/cardamom-seeds_1144-3759.jpg', description: 'Cardamom is a spice made from the seeds of various plants in the ginger family. It is used in cooking and baking, and is known for its digestive benefits and aromatic flavor.', attributes: ['Ayurveda', 'Homeopathy'] },
            { name: 'Turmeric', image: 'https://img.freepik.com/free-photo/turmeric-roots_1150-32.jpg', description: 'Turmeric is a bright yellow spice derived from the root of the Curcuma longa plant. It is widely used in cooking and traditional medicine, particularly in Ayurveda and Siddha practices.', attributes: ['Ayurveda', 'Homeopathy'] },
            { name: 'Licorice Root', image: 'https://img.freepik.com/free-photo/licorice-root-sticks_1150-12745.jpg', description: 'Licorice root is a herb used in traditional medicine for its soothing and anti-inflammatory properties. It is commonly used in both Ayurveda and Homeopathy.', attributes: ['Ayurveda', 'Homeopathy'] },
            { name: 'Ashwagandha', image: 'https://img.freepik.com/free-photo/ashwagandha-root_1150-28928.jpg', description: 'Ashwagandha is a powerful herb used in Ayurvedic medicine to reduce stress and improve energy levels. It is known for its adaptogenic properties and is also used in Homeopathy.', attributes: ['Ayurveda', 'Homeopathy'] },
        ];


        // Store the plant data globally
        window.plants = plants;

        // Render initial plant cards
        displayPlants(plants);
    };

    const displayPlants = (plants) => {
        const plantGrid = document.querySelector('.plant-grid');
        plantGrid.innerHTML = ''; // Clear existing plants
        plants.forEach(plant => {
            const plantCard = document.createElement('div');
            plantCard.classList.add('plant-card');
            plantCard.innerHTML = `
                <img src="${plant.image}" alt="${plant.name}">
                <h3>${plant.name}</h3>
                <p>${plant.description}</p>
            `;
            plantGrid.appendChild(plantCard);
        });
    };

    const searchPlants = () => {
        const searchInput = document.getElementById('plant-search');
        searchInput.addEventListener('input', filterPlants);
    };

    const filterPlants = () => {
        const searchQuery = document.getElementById('plant-search').value.toLowerCase();
        const selectedFilters = Array.from(document.querySelectorAll('.filter:checked')).map(filter => filter.value);

        const filteredPlants = window.plants.filter(plant => {
            const matchesSearch = plant.name.toLowerCase().includes(searchQuery) || plant.description.toLowerCase().includes(searchQuery);
            const matchesFilters = selectedFilters.every(filter => plant.attributes.includes(filter));

            return matchesSearch && (selectedFilters.length === 0 || matchesFilters);
        });

        displayPlants(filteredPlants);
    };

    const initVirtualGarden = () => {
        const gardenContainer = document.querySelector('.garden-container');
        gardenContainer.innerHTML = '<p>Your virtual garden is empty. Add plants to get started!</p>';
    };

    const setupFilterDropdown = () => {
        const filterButton = document.querySelector('.filter-button');
        const filterDropdown = document.querySelector('.filter-dropdown');

        filterButton.addEventListener('click', () => {
            filterDropdown.style.display = filterDropdown.style.display === 'block' ? 'none' : 'block';
        });

        // Close the dropdown if the user clicks outside of it
        window.addEventListener('click', (event) => {
            if (!filterButton.contains(event.target) && !filterDropdown.contains(event.target)) {
                filterDropdown.style.display = 'none';
            }
        });
    };

    // Event listener for filter checkboxes
    const setupFilterListeners = () => {
        document.querySelectorAll('.filter').forEach(checkbox => {
            checkbox.addEventListener('change', filterPlants);
        });
    };

    navSlide();
    navLinkClick();
    loadPlants();
    searchPlants(); // Initialize search functionality
    setupFilterDropdown(); // Initialize filter dropdown
    setupFilterListeners(); // Initialize filter listeners
    initVirtualGarden();
});
