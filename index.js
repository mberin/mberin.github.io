let iconCart = document.querySelector('.fa-bars');
let sidebar = document.querySelector(".sidebar");
let listServiceHTML = document.querySelector('.listService');
let services = [];

iconCart.addEventListener('click', () => {
    sidebar.classList.toggle('showNav');
});


const addDataToHTML = () => {
    // Clear existing services
    listServiceHTML.innerHTML = '';

    // Add new services
    if (services.length > 0) {
        services.forEach(service => {
            let newService = document.createElement('div');
            newService.dataset.id = service.id;
            newService.classList.add('service-card');
            newService.innerHTML =
            `<div class="service-img">
                <img src="${service.image}" alt="${service.name}">
            </div>
            <div class="service-info">
                <div class="name">${service.name}</div>
                <div class="description">${service.description}</div>
            </div>`;
            listServiceHTML.appendChild(newService);
        });
    }
}

const initApp = () => {
    // Get services data
    fetch('services.json')
    .then(response => response.json())
    .then(data => {
        services = data;
        addDataToHTML();
    })
}

initApp();