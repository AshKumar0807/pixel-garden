document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                link.style.animation = link.style.animation ? '' : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
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
                sections.forEach(section => section.classList.remove('active'));
                document.getElementById(targetId).classList.add('active');
            });
        });
    };

    const loadPlants = () => {
        const plants = {
            Ayurveda: [
                { name: 'Holy Basil (Tulsi)', image: 'https://img.freepik.com/free-photo/fresh-green-parsley-grass_132075-5658.jpg?w=2000&t=st=1725466913~exp=1725467513~hmac=8e5fc79249d3924b14d900a724ba29e22e2fdf50948ebdad9fb7d3488ab8fa16', description: 'Holy Basil, also known as Tulsi, is revered in many cultures for its medicinal properties. It is commonly used in Ayurveda and Homeopathy to promote health and well-being.', attributes: ['Ayurveda', 'Homeopathy'] },
                { name: 'Cardamom', image: 'https://img.freepik.com/free-photo/cardamom-seeds_1144-3759.jpg', description: 'Cardamom is a spice made from the seeds of various plants in the ginger family. It is used in cooking and baking, and is known for its digestive benefits and aromatic flavor.', attributes: ['Ayurveda', 'Homeopathy'] },
                { name: 'Turmeric', image: 'https://img.freepik.com/free-photo/turmeric-roots_1150-32.jpg', description: 'Turmeric is a bright yellow spice derived from the root of the Curcuma longa plant. It is widely used in cooking and traditional medicine, particularly in Ayurveda and Siddha practices.', attributes: ['Ayurveda', 'Siddha'] },
                { name: 'Licorice Root', image: 'https://img.freepik.com/free-photo/licorice-root-sticks_1150-12745.jpg', description: 'Licorice root is a herb used in traditional medicine for its soothing and anti-inflammatory properties. It is commonly used in both Ayurveda and Homeopathy.', attributes: ['Ayurveda', 'Homeopathy'] },
                { name: 'Ashwagandha', image: 'https://img.freepik.com/free-photo/ashwagandha-root_1150-28928.jpg', description: 'Ashwagandha is a powerful herb used in Ayurvedic medicine to reduce stress and improve energy levels. It is known for its adaptogenic properties and is also used in Homeopathy.', attributes: ['Ayurveda', 'Homeopathy'] }
            ],
            'Yoga & Naturopathy': [
                { name: 'Ginger', image: 'https://img.freepik.com/free-photo/ginger-root_1150-16943.jpg', description: 'Ginger is a popular spice known for its digestive benefits and anti-inflammatory properties. It is commonly used in both Yoga and Naturopathy for its health-promoting qualities.', attributes: ['Yoga & Naturopathy'] },
                { name: 'Aloe Vera', image: 'https://img.freepik.com/free-photo/aloe-vera-plant_1150-42889.jpg', description: 'Aloe Vera is renowned for its soothing and healing properties. It is often used in topical treatments and internal health applications in Yoga and Naturopathy practices.', attributes: ['Yoga & Naturopathy'] },
                { name: 'Peppermint', image: 'https://img.freepik.com/free-photo/peppermint-leaves_1150-11684.jpg', description: 'Peppermint is used in Yoga and Naturopathy for its digestive aid and refreshing properties. It is commonly used in teas and topical applications for relief.', attributes: ['Yoga & Naturopathy'] },
                { name: 'Lavender', image: 'https://img.freepik.com/free-photo/lavender-fields_1150-18307.jpg', description: 'Lavender is celebrated for its calming and relaxing effects. It is used in Yoga and Naturopathy to alleviate stress and improve sleep quality.', attributes: ['Yoga & Naturopathy'] },
                { name: 'Eucalyptus', image: 'https://img.freepik.com/free-photo/eucalyptus-leaves_1150-40078.jpg', description: 'Eucalyptus is known for its decongestant and anti-inflammatory properties. It is used in Yoga and Naturopathy to support respiratory health and ease discomfort.', attributes: ['Yoga & Naturopathy'] }
            ],
            Unani: [
                { name: 'Black Seed', image: 'https://img.freepik.com/free-photo/black-seeds_1150-11467.jpg', description: 'Black Seed, also known as Nigella sativa, is used in Unani medicine for its wide range of health benefits including its anti-inflammatory and antioxidant properties.', attributes: ['Unani'] },
                { name: 'Pomegranate', image: 'https://img.freepik.com/free-photo/pomegranate-fruits_1150-40730.jpg', description: 'Pomegranate is known for its antioxidant properties and is used in Unani medicine to promote cardiovascular health and overall well-being.', attributes: ['Unani'] },
                { name: 'Fenugreek', image: 'https://img.freepik.com/free-photo/fenugreek-seeds_1150-32984.jpg', description: 'Fenugreek is used in Unani medicine for its digestive and anti-inflammatory properties. It is often used to support metabolic health and manage blood sugar levels.', attributes: ['Unani'] },
                { name: 'Ginger', image: 'https://img.freepik.com/free-photo/ginger-roots_1150-34067.jpg', description: 'Ginger is a common herb in Unani medicine known for its digestive benefits and anti-inflammatory effects. It is used to treat various ailments and promote overall health.', attributes: ['Unani'] },
                { name: 'Aloe Vera', image: 'https://img.freepik.com/free-photo/aloe-vera-leaves_1150-16467.jpg', description: 'Aloe Vera is used in Unani medicine for its soothing and healing properties, particularly for skin conditions and digestive health.', attributes: ['Unani'] }
            ],
            Siddha: [
                { name: 'Neem', image: 'https://img.freepik.com/free-photo/neem-tree_1150-38777.jpg', description: 'Neem is used in Siddha medicine for its detoxifying and antimicrobial properties. It is commonly used to treat skin conditions and improve overall health.', attributes: ['Siddha'] },
                { name: 'Turmeric', image: 'https://img.freepik.com/free-photo/turmeric-roots_1150-19232.jpg', description: 'Turmeric is a staple in Siddha medicine for its anti-inflammatory and antioxidant properties. It is used to support various aspects of health and wellness.', attributes: ['Siddha'] },
                { name: 'Cardamom', image: 'https://img.freepik.com/free-photo/cardamom-seeds_1150-23012.jpg', description: 'Cardamom is used in Siddha medicine for its digestive benefits and aromatic qualities. It is often included in remedies for digestive and respiratory issues.', attributes: ['Siddha'] },
                { name: 'Holy Basil (Tulsi)', image: 'https://img.freepik.com/free-photo/tulsi-leaves_1150-20352.jpg', description: 'Holy Basil is revered in Siddha medicine for its adaptogenic and health-promoting properties. It is used to manage stress and support overall wellness.', attributes: ['Siddha'] },
                { name: 'Ashwagandha', image: 'https://img.freepik.com/free-photo/ashwagandha-root_1150-33567.jpg', description: 'Ashwagandha is used in Siddha medicine for its rejuvenating and stress-relieving effects. It is commonly used to improve vitality and mental health.', attributes: ['Siddha'] }
            ],
            Homeopathy: [
                { name: 'Arnica', image: 'https://img.freepik.com/free-photo/arnica-flowers_1150-18663.jpg', description: 'Arnica is used in Homeopathy for its anti-inflammatory properties and is commonly used in topical treatments.', attributes: ['Homeopathy'] },
                { name: 'Echinacea', image: 'https://img.freepik.com/free-photo/echninacea-flower_1150-21589.jpg', description: 'Echinacea is used in Homeopathy to boost the immune system and combat infections.', attributes: ['Homeopathy'] },
                { name: 'Belladonna', image: 'https://img.freepik.com/free-photo/belladonna-plant_1150-23642.jpg', description: 'Belladonna is used in Homeopathy for its sedative and pain-relieving properties.', attributes: ['Homeopathy'] },
                { name: 'Calendula', image: 'https://img.freepik.com/free-photo/calendula-flowers_1150-23599.jpg', description: 'Calendula is used in Homeopathy for its skin-healing properties and is often used in topical applications.', attributes: ['Homeopathy'] },
                { name: 'Chamomile', image: 'https://img.freepik.com/free-photo/chamomile-flowers_1150-19390.jpg', description: 'Chamomile is used in Homeopathy for its calming and digestive benefits.', attributes: ['Homeopathy'] }
            ]
        };

        // Store the plant data globally
        window.plantsByCategory = plants;

        // Render initial plant cards
        displayPlants(plants.Ayurveda); // Default category
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
        const selectedCategory = document.querySelector('.category.active')?.dataset.category || 'Ayurveda';

        const plants = window.plantsByCategory[selectedCategory] || [];
        const filteredPlants = plants.filter(plant => {
            const matchesSearch = plant.name.toLowerCase().includes(searchQuery) || plant.description.toLowerCase().includes(searchQuery);
            return matchesSearch;
        });

        displayPlants(filteredPlants);
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

    const setupCategoryListeners = () => {
        document.querySelectorAll('.category').forEach(category => {
            category.addEventListener('click', () => {
                document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));
                category.classList.add('active');
                filterPlants(); // Apply filters when category changes
            });
        });
    };

    // Initialize Three.js
    const init3DModelViewer = () => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        const container = document.getElementById('model-viewer');

        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Add basic lighting
        const light = new THREE.PointLight(0xffffff);
        light.position.set(10, 10, 10);
        scene.add(light);

        camera.position.z = 5;

        // Load 3D model
        const loader = new THREE.GLTFLoader();
        loader.load('Flower.glb', (gltf) => {
            scene.add(gltf.scene);
            gltf.scene.scale.set(2, 2, 2); // Scale the model
            animate();
        }, undefined, (error) => {
            console.error('An error happened while loading the model:', error);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        // Handle window resize
        window.addEventListener('resize', () => {
            renderer.setSize(container.clientWidth, container.clientHeight);
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
        });
    };

    navSlide();
    navLinkClick();
    loadPlants();
    searchPlants();
    setupFilterDropdown();
    setupCategoryListeners();
    init3DModelViewer();
});
