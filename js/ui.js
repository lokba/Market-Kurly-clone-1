let menu_info = document.querySelector("#info");
let subinfo = document.querySelector(".subinfo");

menu_info.addEventListener("mouseover", () => {
    subinfo.style.display = "block";
})

menu_info.addEventListener("mouseout", () => {
    subinfo.style.display = "none";
})

