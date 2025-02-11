/***************************************Main js Starts**********************************************************/
/*********************************************Header Js Starts****************************************************/

function onclick_pop() {
    let pop_toggle_container = document.querySelector(".container_1_pop");
    pop_toggle_container.style.display="none";
}

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

function chatbox_index_key_rise() {
    /*First Function for chatbox rise up*/

    var chat_box_rise = document.querySelectorAll(".chatbox_index_key_rise");
    chat_box_rise.forEach(function (chat_box_rise_function) {
        chat_box_rise_function.classList.add('chatbox_index_key_enter');
    });

    console.log("Mission Done");
}

function chatbox_index_img_key_rise() {
    /*Second Function for chatbox img rise up*/

    var chat_box_img_rise = document.querySelectorAll(".chatbox_index_img_key_rise");
    chat_box_img_rise.forEach(function (chat_box_img_rise_function) {
        chat_box_img_rise_function.classList.add('mouse_enter_img_animation');
    });

    console.log("Done");
}
function chatbox_index_key_set_down() {
    /*third Function for chatbox set down*/

    var chat_box_up = document.querySelectorAll(".chatbox_index_key_out");
    chat_box_up.forEach(function (chat_box_up_function) {
        chat_box_up_function.classList.add('chatbox_index_key_leave');
    });

    console.log("Mission Done");
}

function chatbox_index_key_img_set_down() {
    /*Fourth Function for chatbox img set down*/

    var chat_box_img_up = document.querySelectorAll(".chatbox_index_img_key_out");
    chat_box_img_up.forEach(function (chat_box_img_up_function) {
        chat_box_img_up_function.classList.add('mouse_leave_img_animation');
    });

    console.log("Done");
}

/*******************************************Main Container-3 js starts*******************************************/
