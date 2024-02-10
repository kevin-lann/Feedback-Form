const unhappy_selection = document.querySelector(".unhappy");
const mid_selection = document.querySelector(".mid");
const happy_selection = document.querySelector(".happy");
const feedback_btn = document.querySelector(".btn");

var rating = ""; // unhappy, mid, happy

unhappy_selection.addEventListener("click", () => {
    removeActive();
    unhappy_selection.classList.add("clicked");
    rating = "unhappy";
});

mid_selection.addEventListener("click", () => {
    removeActive();
    mid_selection.classList.add("clicked");
    rating = "mid";
});

happy_selection.addEventListener("click", () => {
    removeActive();
    happy_selection.classList.add("clicked");
    rating = "happy";
});

feedback_btn.addEventListener("click", () => {
    handleSubmission(rating);
});

function handleSubmission () {
    if(rating == "") {
        alert("Please select a rating.");
    }
    else {
        end_screen(rating);
    }
}

function end_screen() {
    const main_container = document.querySelector(".main_container");
    main_container.innerHTML = ` <p class="emoji">✨</p>
    <p class="caption"> Thank You! </p>
    <br/>
    <p class="caption"> Feedback: ${rating} </p>`;
}

function removeActive() {
    unhappy_selection.classList.remove("clicked");
    mid_selection.classList.remove("clicked");
    happy_selection.classList.remove("clicked");
}
