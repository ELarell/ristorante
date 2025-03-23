document.addEventListener("DOMContentLoaded", () => {
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = (e) => {
document.querySelector(".active").classList.remove("active");
e.target.classList.add("active");

filterableCards.forEach(card => {

    card.classList.add("hide");
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove("hide");
    }
});
};

filterButtons.forEach(button => button.addEventListener("click" , filterCards));

});


//Modal

var modal = document.getElementById(`simpleModal`);

var modalBtn = document.getElementById(`modalBtn`);

var closeBtn = document.getElementsByClassName(`closeBtn`)[0];

modalBtn.addEventListener(`click`, openModal);
closeBtn.addEventListener(`click`, closeModal);
window.addEventListener(`click`, outsideClick);

function openModal(){
    modal.style.display = `block`;
}

function closeModal(){
    modal.style.display = `none`;
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display = `none`;
    }
}