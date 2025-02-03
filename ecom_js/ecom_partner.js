/*----------------------------------------------------------Js For Partner Page Starts From Here----------------------------------------------------*/
/*=================================================Chnging The Color of the Button Of Toggle And this is a local function===========================*/
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

function sportify_toggle_btn_color() {
    /*Main Button id*/
    var toggle_btn = document.querySelector("#container_2_toggle_button");

    /* Container_2 box id*/
    var find_sportify = document.querySelector(".sportify_btn_js");


    if (find_sportify) {
        toggle_btn.style.borderColor = "green";
        toggle_btn.style.color = "green";
        console.log("Color Chnged");
        find_sportify = false;
    }
    else {
        console.log("Nothing Changed");
    }
}
function yt_toggle_btn_color() {

    var toggle_btn = document.querySelector("#container_2_toggle_button");
    var find_yt = document.querySelector(".yt_btn_js");
    if (find_yt) {
        toggle_btn.style.borderColor = "red";
        toggle_btn.style.color = "red";
        console.log("Color Chnged");
        find_yt = false;
    }
    else {
        console.log("Nothing Changed");
    }
}

function gp_toggle_btn_color() {

    var toggle_btn = document.querySelector("#container_2_toggle_button");
    var find_gp = document.querySelector(".gp_btn_js");
    if (find_gp) {
        toggle_btn.style.borderColor = "yellow";
        toggle_btn.style.color = "yellow";
        console.log("Color Chnged");
        find_gp = false;
    }
    else {
        console.log("Nothing Changed");
    }
}

function gemini_toggle_btn_color() {
    let toggle_btn = document.querySelector("#container_3_toggle_button");
    let find_gemini = document.querySelector(".gemini_btn_js");

    if (find_gemini) {
        toggle_btn.style.borderColor = "red";
        toggle_btn.style.color = "red";
        console.log("Color Changed");
    } else {
        console.log("Nothing Changed");
    }
}

function chat_gpt_toggle_btn_color() {
    let toggle_btn = document.querySelector("#container_3_toggle_button");
    let find_chat_gpt = document.querySelector(".chat_gpt_btn_js");

    if (find_chat_gpt) {
        toggle_btn.style.borderColor = "black";
        toggle_btn.style.color = "black";
        console.log("Color Changed");
    } else {
        console.log("Nothing Changed");
    }
}

function meta_toggle_btn_color() {
    let toggle_btn = document.querySelector("#container_3_toggle_button");
    let find_meta = document.querySelector(".meta_btn_js");

    if (find_meta) {
        toggle_btn.style.borderColor = "blue";
        toggle_btn.style.color = "blue";
        console.log("Color Changed");
    } else {
        console.log("Nothing Changed");
    }
}

function copilot_toggle_btn_color() {
    let toggle_btn = document.querySelector("#container_3_toggle_button");
    let find_copilot = document.querySelector(".copilot_btn_js");

    if (find_copilot) {
        toggle_btn.style.borderColor = "pink";
        toggle_btn.style.color = "pink";
        console.log("Color Changed");
    } else {
        console.log("Nothing Changed");
    }
}

/*************************************************************Color Chnge For Button Js Ends Here************************************************/
/**********************************************click on the Button For Rottetion for dizcribtion js start****************************************/

