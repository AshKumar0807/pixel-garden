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
                { name: 'Cardamom', image: 'https://plantparadise.in/cdn/shop/files/Greencardamomplant-2.jpg?v=1704034748', description: 'Cardamom is a spice made from the seeds of various plants in the ginger family. It is used in cooking and baking, and is known for its digestive benefits and aromatic flavor.', attributes: ['Ayurveda', 'Homeopathy'] },
                { name: 'Turmeric', image: 'https://kadiyamnursery.com/cdn/shop/products/Curcumadomestica_1200x1200.jpg?v=1680929165', description: 'Turmeric is a bright yellow spice derived from the root of the Curcuma longa plant. It is widely used in cooking and traditional medicine, particularly in Ayurveda and Siddha practices.', attributes: ['Ayurveda', 'Siddha'] },
                { name: 'Licorice Root', image: 'https://files.nccih.nih.gov/licorice-root-steven-foster-square.jpg', description: 'Licorice root is a herb used in traditional medicine for its soothing and anti-inflammatory properties. It is commonly used in both Ayurveda and Homeopathy.', attributes: ['Ayurveda', 'Homeopathy'] },
                { name: 'Ashwagandha', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8yfD8B4S2davMX8pzSGFVkWqW21jw6mN6S-hiv3zAaXwbEESA', description: 'Ashwagandha is a powerful herb used in Ayurvedic medicine to reduce stress and improve energy levels. It is known for its adaptogenic properties and is also used in Homeopathy.', attributes: ['Ayurveda', 'Homeopathy'] }
            ],
            'Yoga & Naturopathy': [
                { name: 'Ginger', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOhQc2AJepfAERgWiBHSst85rXRxoG9oGdw&s', description: 'Ginger is a popular spice known for its digestive benefits and anti-inflammatory properties. It is commonly used in both Yoga and Naturopathy for its health-promoting qualities.', attributes: ['Yoga & Naturopathy'] },
                { name: 'Aloe Vera', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgBoRKXddytrYGYyWbez8VXUeKSpkFt5v0w&s', description: 'Aloe Vera is renowned for its soothing and healing properties. It is often used in topical treatments and internal health applications in Yoga and Naturopathy practices.', attributes: ['Yoga & Naturopathy'] },
                { name: 'Peppermint', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWFi1OMgO4iE06WfYPXe6rvmKWxGvnV_olg&s', description: 'Peppermint is used in Yoga and Naturopathy for its digestive aid and refreshing properties. It is commonly used in teas and topical applications for relief.', attributes: ['Yoga & Naturopathy'] },
                { name: 'Lavender', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GxnilH41ZebC9aBYmGsYBv63rMWqpupz0Q&s', description: 'Lavender is celebrated for its calming and relaxing effects. It is used in Yoga and Naturopathy to alleviate stress and improve sleep quality.', attributes: ['Yoga & Naturopathy'] },
                { name: 'Eucalyptus', image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/eucalyptus-leaves-732x549-thumbnail.jpg', description: 'Eucalyptus is known for its decongestant and anti-inflammatory properties. It is used in Yoga and Naturopathy to support respiratory health and ease discomfort.', attributes: ['Yoga & Naturopathy'] }
            ],
            Unani: [
                { name: 'Black Seed', image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Nsativa001Wien.jpg', description: 'Black Seed, also known as Nigella sativa, is used in Unani medicine for its wide range of health benefits including its anti-inflammatory and antioxidant properties.', attributes: ['Unani'] },
                { name: 'Pomegranate', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbgR_47T_s9kH9ThKPvAq8d-8qZD7whAjQQ&s', description: 'Pomegranate is known for its antioxidant properties and is used in Unani medicine to promote cardiovascular health and overall well-being.', attributes: ['Unani'] },
                { name: 'Fenugreek', image: 'https://cdn.britannica.com/37/192237-050-4C6A4CC8/fenugreek-Trigonella-foenum-graecum.jpg', description: 'Fenugreek is used in Unani medicine for its digestive and anti-inflammatory properties. It is often used to support metabolic health and manage blood sugar levels.', attributes: ['Unani'] },
                { name: 'Ginger', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOhQc2AJepfAERgWiBHSst85rXRxoG9oGdw&s', description: 'Ginger is a common herb in Unani medicine known for its digestive benefits and anti-inflammatory effects. It is used to treat various ailments and promote overall health.', attributes: ['Unani'] },
                { name: 'Aloe Vera', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgBoRKXddytrYGYyWbez8VXUeKSpkFt5v0w&s', description: 'Aloe Vera is used in Unani medicine for its soothing and healing properties, particularly for skin conditions and digestive health.', attributes: ['Unani'] }
            ],
            Siddha: [
                { name: 'Neem', image: 'https://t3.ftcdn.net/jpg/00/54/26/82/360_F_54268236_Yvr7nQQ9uZnHmmcVGxCVtBpoF0GCBSxZ.jpg', description: 'Neem is used in Siddha medicine for its detoxifying and antimicrobial properties. It is commonly used to treat skin conditions and improve overall health.', attributes: ['Siddha'] },
                { name: 'Turmeric', image: 'https://kadiyamnursery.com/cdn/shop/products/Curcumadomestica_1200x1200.jpg?v=1680929165', description: 'Turmeric is a staple in Siddha medicine for its anti-inflammatory and antioxidant properties. It is used to support various aspects of health and wellness.', attributes: ['Siddha'] },
                { name: 'Cardamom', image: 'https://plantparadise.in/cdn/shop/files/Greencardamomplant-2.jpg?v=1704034748', description: 'Cardamom is used in Siddha medicine for its digestive benefits and aromatic qualities. It is often included in remedies for digestive and respiratory issues.', attributes: ['Siddha'] },
                { name: 'Holy Basil (Tulsi)', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwN5DXsrWHb_OMs8MORKuo5riBr0rGAu6q8w&s', description: 'Holy Basil is revered in Siddha medicine for its adaptogenic and health-promoting properties. It is used to manage stress and support overall wellness.', attributes: ['Siddha'] },
                { name: 'Ashwagandha', image: 'https://5.imimg.com/data5/SELLER/Default/2020/12/GQ/YQ/YJ/49495889/ashwagandha-plant-price-rs-1-plant.jpg', description: 'Ashwagandha is used in Siddha medicine for its rejuvenating and stress-relieving effects. It is commonly used to improve vitality and mental health.', attributes: ['Siddha'] }
            ],
            Homeopathy: [
                { name: 'Arnica', image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/07/Arnica-montana-arnica-732x549-thumbnail.jpg', description: 'Arnica is used in Homeopathy for its anti-inflammatory properties and is commonly used in topical treatments.', attributes: ['Homeopathy'] },
                { name: 'Echinacea', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP17tur8r7-vQHJKA0KIqo9eZo0XuJruKINQ&s', description: 'Echinacea is used in Homeopathy to boost the immune system and combat infections.', attributes: ['Homeopathy'] },
                { name: 'Belladonna', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfDZxIBNcI4hQm943a682oxoN1F9XhkRAqA&s', description: 'Belladonna is used in Homeopathy for its sedative and pain-relieving properties.', attributes: ['Homeopathy'] },
                { name: 'Calendula', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00KXP-4Ar7DgLJVqK76PooCyxye9Cc-yImA&s', description: 'Calendula is used in Homeopathy for its skin-healing properties and is often used in topical applications.', attributes: ['Homeopathy'] },
                { name: 'Chamomile', image: 'https://organicbazar.net/cdn/shop/products/Chamomile-German-Seeds-2.jpg?v=1694168829https://organicbazar.net/cdn/shop/products/Chamomile-German-Seeds-2.jpg?v=1694168829', description: 'Chamomile is used in Homeopathy for its calming and digestive benefits.', attributes: ['Homeopathy'] }
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


    navSlide();
    navLinkClick();
    loadPlants();
    searchPlants();
    setupFilterDropdown();
    setupCategoryListeners();
    init3DModelViewer();
});
