const hamburgerBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-xmark');
const sidebar = document.querySelector(".small-nav");
const listServiceHTML = document.querySelector('.listService');
const currentYearContainer = document.querySelector('#current-year');
let currentYear = new Date().getFullYear();
let services = [];

hamburgerBtn.addEventListener('click', function() {
    sidebar.classList.toggle('showNav');
})

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('showNav');
})



const addDataToHTML = () => {
    // Add new services
    if (services.length > 0) {
        services.forEach(service => {
            let newService = document.createElement('div');
            newService.dataset.id = service.id;
            newService.classList.add('service-card');
            newService.innerHTML =
            `<div class="service-img">
                <img src="${service.image}" alt="${service.name}" loading="lazy">
            </div>
            <div class="service-info">
                <div class="name">${service.name}</div>
                <div class="description">${service.description}</div>
            </div>
            <div class="learn-more-container">
                <a href="${service.name}.html"><button class="learn-more">Learn more</button></a>
            </div>`;
            listServiceHTML.appendChild(newService);
        });
    }
}

const initApp = () => {
    currentYearContainer.textContent = `${currentYear}`;

    // Get services data
    fetch('services.json')
    .then(response => response.json())
    .then(data => {
        services = data;
        addDataToHTML();
    })
}

initApp();
