const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', function() {
    navLinks.classList.toggle('nav-active'); 
});


const cookieBanner = document.getElementById('cookie-notice');
const acceptBtn = document.getElementById('accept-cookies');


if (localStorage.getItem('cookiesAccepted') === 'yes') {
    cookieBanner.style.display = 'none'; 
}

acceptBtn.addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'yes'); 
    cookieBanner.style.display = 'none'; 
});


async function loadTeamData() {
    const container = document.getElementById('user-container');
    
    try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        
        const data = await response.json();
        
        const usersArray = data.results; 
        
        for (let i = 0; i < usersArray.length; i++) {
            let user = usersArray[i]; 
            
            container.innerHTML += `
                <div class="user-card">
                    <img src="${user.picture.large}" alt="Profile">
                    <h3>${user.name.first} ${user.name.last}</h3>
                    <p>${user.email}</p>
                </div>
            `;
        }
    } catch (error) {
        container.innerHTML = `<p>Failed to load team data.</p>`;
    }
}

loadTeamData();
