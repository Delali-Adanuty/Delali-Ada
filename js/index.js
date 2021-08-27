const preloader = document.querySelector('div.preloader');
const home = document.querySelector('nav.navigation ul.right li.home');
const homeSection = document.querySelector('.home-section');
const info = document.querySelector('nav.navigation ul.right li.info');
const infoSection = document.querySelector('.info-section');
const tickets = document.querySelector('nav.navigation ul.right li.tickets');
const ticketSection = document.querySelector('.ticket-section');
const promHonors = document.querySelector('nav.navigation ul.right li.prom-honors')
const promHonorsSection = document.querySelector('.prom-honors-section');
const contact = document.querySelector('nav.navigation ul.right li.contact');
const contactSection = document.querySelector('.contact-section')

home.addEventListener('click', showHomeSection);
info.addEventListener('click', showInfoSection);
tickets.addEventListener('click', showTicketSection);
promHonors.addEventListener('click', showPromHonorsSection);
contact.addEventListener('click', showContactSection);

setInterval(removePreloader, 280);



function removePreloader() {
    if (window.navigator.onLine == true) {
        /*Do nothing*/
    } else {
        /*Do nothing*/
    }
    preloader.style.display = 'none';
}

function showHomeSection() {
    homeSection.scrollIntoView();
}

function showInfoSection() {
    infoSection.scrollIntoView();
}

function showTicketSection() {
    ticketSection.scrollIntoView();
}

function showPromHonorsSection() {
    promHonorsSection.scrollIntoView();
}

function showContactSection() {
    contactSection.scrollIntoView();
}