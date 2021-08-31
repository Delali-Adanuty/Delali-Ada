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
const contactSection = document.querySelector('.contact-section');
const regularTicket = document.querySelector('.regular-ticket-button');
const vipTicket = document.querySelector('.vip-ticket-button');
const tableTicket = document.querySelector('.table-ticket-button');
const regularCancel = document.querySelector('.regular-ticket section li.cancel');
const regularSection = document.querySelector('.regular-ticket');
const vipCancel = document.querySelector('.vip-ticket section li.cancel');
const vipSection = document.querySelector('.vip-ticket');
const tableCancel = document.querySelector('.table-ticket section li.cancel');
const tableSection = document.querySelector('.table-ticket');
const king = document.querySelector('.prom-honors-section ul.prom-honors-list li.prom-king');
const queen = document.querySelector('.prom-honors-section ul.prom-honors-list li.prom-queen');
const couple = document.querySelector('.prom-honors-section ul.prom-honors-list li.prom-couple');
const gentleman = document.querySelector('.prom-honors-section ul.prom-honors-list li.gentleman');
const lady = document.querySelector('.prom-honors-section ul.prom-honors-list li.lady');
const outfit = document.querySelector('.prom-honors-section ul.prom-honors-list li.outfit');
const kingSection = document.querySelector('.king-modal');
const kingCancel = document.querySelector('.king-modal section li.cancel');
const queenSection = document.querySelector('.queen-modal');
const queenCancel = document.querySelector('.queen-modal section li.cancel');
const coupleSection = document.querySelector('.couple-modal');
const coupleCancel = document.querySelector('.couple-modal section li.cancel');
const gentlemanSection = document.querySelector('.gentleman-modal');
const gentlemanCancel = document.querySelector('.gentleman-modal section li.cancel');
const ladySection = document.querySelector('.lady-modal');
const ladyCancel = document.querySelector('.lady-modal section li.cancel');
const outfitSection = document.querySelector('.outfit-modal');
const outfitCancel = document.querySelector('.outfit-modal section li.cancel');
const voteSection = document.querySelector('.vote-section');
const voteButton = document.querySelector('button.vote-button');

home.addEventListener('click', showHomeSection);
info.addEventListener('click', showInfoSection);
tickets.addEventListener('click', showTicketSection);
promHonors.addEventListener('click', showPromHonorsSection);
contact.addEventListener('click', showContactSection);
regularCancel.addEventListener('click', removeRegular);
regularTicket.addEventListener('click', showRegular);
vipCancel.addEventListener('click', removeVip);
vipTicket.addEventListener('click', showVip);
tableCancel.addEventListener('click', removeTable);
tableTicket.addEventListener('click', showTable);
kingCancel.addEventListener('click', removeKingSection);
king.addEventListener('click', showKingSection);
queenCancel.addEventListener('click', removeQueenSection);
queen.addEventListener('click', showQueenSection);
coupleCancel.addEventListener('click', removeCoupleSection);
couple.addEventListener('click', showCoupleSection);
gentlemanCancel.addEventListener('click', removeGentlemanSection);
gentleman.addEventListener('click', showGentlemanSection);
ladyCancel.addEventListener('click', removeLadySection);
lady.addEventListener('click', showOutfitSection);
outfitCancel.addEventListener('click', removeOutfitSection);
outfit.addEventListener('click', showOutfitSection);
voteButton.addEventListener('click', showVoteSection);

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

function removeRegular() {
    regularSection.style.display = 'none';
}

function showRegular() {
    regularSection.style.display = 'block';
    regularSection.style.display = 'grid';
}

function removeVip() {
    vipSection.style.display = 'none';
}

function showVip() {
    vipSection.style.display = 'block';
    vipSection.style.display = 'grid';
}

function removeTable() {
    tableSection.style.display = 'none';
}

function showTable() {
    tableSection.style.display = 'block';
    tableSection.style.display = 'grid';
}

function removeKingSection() {
    kingSection.style.display = 'none';
}

function showKingSection() {
    kingSection.style.display = 'block';
    kingSection.style.display = 'grid';
}

function removeQueenSection() {
    queenSection.style.display = 'none';
}

function showQueenSection() {
    queenSection.style.display = 'block';
    queenSection.style.display = 'grid';
}

function removeCoupleSection() {
    coupleSection.style.display = 'none';
}

function showCoupleSection() {
    coupleSection.style.display = 'block';
    coupleSection.style.display = 'grid';
}

function removeGentlemanSection() {
    gentlemanSection.style.display = 'none';
}

function showGentlemanSection() {
    gentlemanSection.style.display = 'block';
    gentlemanSection.style.display = 'grid';
}

function removeLadySection() {
    ladySection.style.display = 'none';
}

function showLadySection() {
    ladySection.style.display = 'block';
    ladySection.style.display = 'grid';
}

function removeOutfitSection() {
    outfitSection.style.display = 'none';
}

function showOutfitSection() {
    outfitSection.style.display = 'block';
    outfitSection.style.display = 'grid';
}

function showVoteSection() {
    voteButton.style.display = 'none';
    voteSection.style.display = 'block';
}