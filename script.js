let rock_img = document.querySelector("#rock_img");
let paper_img = document.querySelector("#paper_img");
let scissor_img = document.querySelector("#scissor_img");

let user_cnt = document.querySelector("#user-cnt");
let comp_cnt = document.querySelector("#comp-cnt");
let user_score = 0;
let comp_score = 0;

let message = document.querySelector("#message");


rock_img.addEventListener("click", () => {
    let comp_choice;

    let random_no = Math.random();

    if(random_no < 0.3) {
        comp_choice = "rock";
    } else if (random_no < 0.6) {
        comp_choice = "paper";
    }else {
        comp_choice = "scissor";
    }


    if(comp_choice === "rock") {
        message.innerText = "Comp chose rock. Draw.";
        message.style.backgroundColor = "gray";
    } else if (comp_choice === "paper") {
        message.innerText = "Comp chose paper. Comp wins.";
        comp_cnt.innerText = ++comp_score;
        message.style.backgroundColor = "red";
    } else {
        message.innerText = "Comp chose scissor. You win.";
        user_cnt.innerText = ++user_score;
        message.style.backgroundColor = "green";
    }
})

paper_img.addEventListener("click", () => {
    let comp_choice;

    let random_no = Math.random();

    if(random_no < 0.3) {
        comp_choice = "rock";
    } else if (random_no < 0.6) {
        comp_choice = "paper";
    }else {
        comp_choice = "scissor";
    }


    if(comp_choice === "rock") {
        message.innerText = "Comp chose rock. You win.";
        message.style.backgroundColor = "green";
        user_cnt.innerText = ++user_score;
    } else if (comp_choice === "paper") {
        message.innerText = "Comp chose paper. Draw.";
        message.style.backgroundColor = "gray";
    } else {
        message.innerText = "Comp chose scissor. Comp Wins.";
        comp_cnt.innerText = ++comp_score;
        message.style.backgroundColor = "red";
    }
})

scissor_img.addEventListener("click", () => {
    let comp_choice;

    let random_no = Math.random();

    if(random_no < 0.3) {
        comp_choice = "rock";
    } else if (random_no < 0.6) {
        comp_choice = "paper";
    }else {
        comp_choice = "scissor";
    }


    if(comp_choice === "rock") {
        message.innerText = "Comp chose rock. Comp wins.";
        message.style.backgroundColor = "red";
        comp_cnt.innerText = ++comp_score;
    } else if (comp_choice === "paper") {
        message.innerText = "Comp chose paper. You win.";
        message.style.backgroundColor = "green";
        user_cnt.innerText = ++user_score;
        
    } else {
        message.innerText = "Comp chose scissor. Draw.";
        message.style.backgroundColor = "gray";
    }
})