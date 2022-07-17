


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


// below function will change the html content and font-size,padding and color when user hover the mouse over what is my name?
function guess_name(details) {
    details[`target`][`style`][`fontSize`] = `2rem`;
    details[`target`][`innerHTML`] = `<p>My Name is Satinder Singh and following are my hobbies</p>`;
    details[`target`][`style`][`padding`] = `10px`;
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

function city_space(details){
    details[`target`][`innerHTML`] += `, Capital city of Alberta`;
}
let city_id = document.getElementById(`info_city`);
city_id.addEventListener(`click`, city_space);