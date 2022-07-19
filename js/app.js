// below function will check if the user pressed the space key and if that condition is true then it will display current date and time
function body_space(details) {
    if (details[`key`] === ` `) {
        details[`target`].insertAdjacentHTML(`afterBegin`, `${alert(Date())}`);
    }
}
// body tag will grab the element body
let body_tag = document.getElementById(`body`);
body_tag.addEventListener(`keyup`, body_space);


// below function will change the html content and font color,padding and size when the user will click what is this website for? 
function header_clicked(details) {
    details[`target`][`style`][`fontSize`] = `2rem`;
    details[`target`][`innerHTML`] = `<p>This website is for the assignment w10c </p> `;
    details[`target`][`style`][`padding`] = `10px`;
    details[`target`][`style`][`color`] = `red`;
}
// header_id grabs the id of included to make some changes when user clicks what is this website for?
let header_id = document.getElementById(`included`);
header_id.addEventListener(`click`, header_clicked);


// below function will change the html content and font-size,color when user hover the mouse over what is my name?
function guess_name(details) {
    details[`target`][`style`][`fontSize`] = `2rem`;
    details[`target`][`innerHTML`] = `<p>My Name is Satinder Singh and following are my hobbies</p>`;
    details[`target`][`style`][`color`] = `darkGreen`;
}
// name_id grabs the id name from document to make some changes when user hover the mouse over what is my name?
let name_id = document.querySelector(`#name`);
name_id.addEventListener(`mouseover`, guess_name);


// hobbies grabs the class hobby from document to make some changes
let hobbies = document.getElementsByClassName(`hobby`);
for (counter = 0; counter < hobbies.length; counter++) {
    hobbies[counter][`innerHTML`] += `<p>This is one of my favorite hobby</p>`;
    hobbies[counter][`style`][`color`] = `darkGray`;
}
// below function will change the background color of the element, add text and font-size when element is clicked
function city_click(details) {
    details[`target`][`style`][`backgroundColor`] = `red`;
    details[`target`][`innerHTML`] += `, Capital city of Alberta`;
    details[`target`][`style`][`fontSize`] = `2rem`;
}
// let city_id will grab the element id info_city and give this element to a city_click function
let city_id = document.getElementById(`info_city`);
city_id.addEventListener(`click`, city_click);

// below function will change the background color of the element, add text and font-size when element is clicked
function age_click(details) {
    details[`target`][`style`][`backgroundColor`] = `green`;
    details[`target`][`innerHTML`] += `, I was born in 1994`;
    details[`target`][`style`][`fontSize`] = `2rem`;

}
// let age_id will grab the info age id and give it to a age_click function
let age_id = document.getElementById(`info_age`);
age_id.addEventListener(`click`, age_click);


// below function will change the background color of the element, add text and font-size when element is clicked
function nationality_click(details) {
    details[`target`][`style`][`backgroundColor`] = `blue`;
    details[`target`][`innerHTML`] += `,I came from India in 2015`;
    details[`target`][`style`][`fontSize`] = `2rem`;

}
// let nationality id will grab the info_natioanality by its id and give it to the function nationality click 
let nationality_id = document.getElementById(`info_nationality`);
nationality_id.addEventListener(`click`, nationality_click);

let link_id = document.getElementById(`link`);
link_id[`innerHTML`] += `,this is my favourite website`;


// setInterval(() => {
//     let box_id = document.getElementById(`box`);
//     box_id[`style`][`height`] = `100px`;
//     box_id[`style`][`width`] = `100px`;

//     box_id[`style`][`transform`] = `translateX(${Math.floor(Math.random() * 100)}px) translateY(${Math.floor(Math.random() * 200)}px)`;

// }, 3000);


let my_stop_purple = setInterval(purple_box, 1000);
let button_id_stop = document.getElementById(`button_stop`);
button_id_stop.addEventListener(`click`,stop_purple);
// document.getElementById(`button_start`).addEventListener(`click`,purple_box);
function stop_purple(){
    clearInterval(my_stop_purple);
}
function purple_box(details) {
    let box_id = document.getElementById(`box`);
    box_id[`style`][`height`] = `100px`;
    box_id[`style`][`width`] = `100px`;
    box_id[`style`][`backgroundColor`] = `purple`;
    box_id[`style`][`transform`] = `translateX(${Math.floor(Math.random() * 2000)}px) translateY(${Math.floor(Math.random() * 800)}px)`;
}

function screen_orange(details){
    body_tag[`style`][`backgroundColor`] = `orange`;
}
let my_stop =  setTimeout(screen_orange, 2000);


function stop_orange(){
    clearTimeout(my_stop);
}
document.getElementById(`button_stop`).addEventListener(`click`, stop_orange);

