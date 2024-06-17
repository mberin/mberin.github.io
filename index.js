let iconCart = document.querySelector('.fa-bars');
let sidebar = document.querySelector(".sidebar");

iconCart.addEventListener('click', () => {
    sidebar.classList.toggle('showNav');
});
