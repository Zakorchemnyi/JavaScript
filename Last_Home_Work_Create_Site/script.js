const USERS_URL = "https://api.github.com/users";


function getUsers() {
    return new Promise((resolve, reject) => {
        fetch(USERS_URL)
        .then(response => response.json())
        .then(users => resolve(users))
    })
}


function getUserByLogin(login) {
    return new Promise((resolve, reject) => {
        fetch(`${USERS_URL}/${login}`)
        .then(response => response.json())
        .then(user => resolve(user))
    })
}


function renderUsers() {
    let users = getUsers()
    .then(users => {
        let html = "";
        users.forEach(user => {
            let htmlSegment = `
                <div class="user" data-login="${user.login}">
                    <img src="${user.avatar_url}" data-login="${user.login}">
                    <h2>${user.login}</h2>
                </div>`;
    
            html += htmlSegment;
        })
        const container = document.getElementById('users-list');
        container.innerHTML = html; 
    })
}


function showUserPopup() {
    const container = document.getElementById('users-list');
    const popup = document.getElementById('popup-wrapper');
    const popupClose = document.getElementById('popup-close');
    const popupContent = document.getElementById('popup-content');

    
        container.onclick = ({ target }) => {
            return new Promise((resolve, reject) => {
                if (target.dataset.login == undefined) {
                    reject(new Error("error target.dataset.login == undefined"));
                }
            
            getUserByLogin(target.dataset.login).then(user => {
       
                const html = `
                    <img src="${user.avatar_url}">
                    <div>
                        <h2>${user.login}</h2>
                        <p>name: <b>${user.name}</b></p>
                        <p>company: <b>${user.company ? user.company : '-'}</b></p>
                        <p>location: <b>${user.location ? user.location : '-'}</b></p>
                        <p>blog: <a href="${user.blog}" target="_blank">${user.blog}</a></p>
                        <p>repository: <a href="${user.url}" target="_blank">${user.url}</a></p>
                    </div>`;
            
                popupContent.innerHTML = html;
                // make popup visible
                popup.style.top = 0;
        })})
        };
        popupClose.addEventListener('click', () => {
            popup.style.top = '-130%';
        }); 
    }


document.addEventListener('DOMContentLoaded', function(){
    renderUsers();
    showUserPopup();
}, false);
    

