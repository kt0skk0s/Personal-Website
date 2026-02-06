const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('nav ul');
const links = document.querySelectorAll('nav a'); // Επιλογή όλων των links

// Άνοιγμα/Κλείσιμο με το κουμπί
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Κλείσιμο μενού όταν πατηθεί link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Αυτόματη ενημέρωση έτους Copyright
document.getElementById('copyright-year').textContent = new Date().getFullYear();
