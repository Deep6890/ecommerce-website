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