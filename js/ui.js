let menu_info = document.querySelector("#info");
let subinfo = document.querySelector(".subinfo");
let location_img = document.querySelector("#location");
let location_subinfo = document.querySelector(".location_subinfo");

menu_info.addEventListener("mouseover", () => {
    subinfo.style.display = "block";
})

menu_info.addEventListener("mouseout", () => {
    subinfo.style.display = "none";
})

location_img.addEventListener("mouseover", () => {
    location_subinfo.style.display = "block";
})

location_img.addEventListener("mouseout", () => {
    location_subinfo.style.display = "none";
})

