/*TOGGLE ICONS*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcons.onclick = () => {
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');
}

/*SCROLL SECTIONS ACTIVE LINKS*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) 
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*STICKY NAVABR*/
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*REMOVE TOGGLE ICON AND NAVBAR*/
    menuIcon.classList.remove('bx bx-x');
    navbar.classList.remove('active');
};

/*Scroll reveal*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*Multiple Text*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Data Engineer', 'Data Analyst', 'Traveller'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
