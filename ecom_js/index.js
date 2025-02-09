/***************************************Main js Starts**********************************************************/
/*********************************************Header Js Starts****************************************************/
var header_icon_value = true;
function onclick_header_toggle() {
    var header_toggle_value = document.querySelector(".responsive_header_option");
    if (header_icon_value == true) {
        header_toggle_value.style.display = "flex";
        header_icon_value = false;
    }
    else {
        header_toggle_value.style.display = "none";
        header_icon_value = true;
    }
}
/*****************************************************Header Js Ends**********************************************/
/*********************************************Main Container -1 Js Starts*****************************************/
function myMoveAnimation() {
    var v = document.querySelector(".container_1_main_child_text_block");
    v.classList.add('myMove_animation');
    console.log("Misson Done");
}
window.onload = myMoveAnimation;

/*********************************************Main Container-2 Js starts******************************************/

function chatbox_index_key_ani() {
    var elements = document.querySelectorAll(".chatbox_index");
    elements.forEach(function (element) {
        element.classList.add('chatbox_index_key');
    });
    console.log("Mission Done");
}

function chatbox_index_key_ani_2() {
    var elements_js = document.querySelectorAll(".chatbox_index_img");
    elements_js.forEach(function (element_js) {
        element_js.classList.add('img');
    });
    console.log("Done");
}
function chatbox_index_key_ani() {
    var elements = document.querySelectorAll(".chatbox_index");
    elements.forEach(function (element) {
        element.classList.add('chatbox_index_key');
    });
    console.log("Mission Done");
}

function chatbox_index_key_ani_2() {
    var elements_js = document.querySelectorAll(".chatbox_index_img");
    elements_js.forEach(function (element_js) {
        element_js.classList.add('img');
    });
    console.log("Done");
}
/*******************************************Main Container-3 js starts*******************************************/