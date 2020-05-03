const pageBody = document.querySelector('.page-wrapper');
const switchButton = document.getElementById('switch');
const cardDiv = document.getElementsByClassName('card');

console.log(cardDiv);

switchButton.addEventListener('click', () => {
    pageBody.classList.toggle('dark');

    for (let i = 0; i < cardDiv.length; i++) {
        cardDiv[i].classList.toggle('dark-card');
    }
});
