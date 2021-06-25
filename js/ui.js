let menu_info = document.querySelector("#info");
let subinfo = document.querySelector(".subinfo");
let location_img = document.querySelector("#location");
let location_subinfo = document.querySelector(".location_subinfo");
let category = document.querySelector("#category");
let category_info = document.querySelector(".category_info");
let gnb_menu = document.querySelector(".gnb_menu");
let category_tit = document.querySelector(".category_tit");

let gnb_menu_list = document.querySelectorAll(".gnb_menu_list");
const gnb_menu_lists = Array.from(gnb_menu_list);

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

category.addEventListener("mouseover", () => {
    gnb_menu.style.display = "block";
    category_tit.style.color = "#5f0080";
    category_tit.style.fontWeight = "700";

})

category.addEventListener("mouseout", () => {
    gnb_menu.style.display = "none";
    category_tit.style.color = "black";
    category_tit.style.fontWeight = "400";
});

category_info.addEventListener("mouseover", () => {
    gnb_menu.style.width = "219px";
})

category_info.addEventListener("mouseout", () => {
    gnb_menu.style.width = "440px";
});


gnb_menu_lists.map(value => value.addEventListener("mouseover", () => {
    value.classList.add("current");
    const currentInfo = value.querySelector(".sub_menu");
    const currentParent = value.querySelector(".inner_menu");
    currentInfo.style.display = "block";
    currentParent.style.color = "#5f0080";
    currentParent.style.fontWeight = "700";

}))

gnb_menu_lists.map(value => value.addEventListener("mouseout", () => {
    value.classList.remove("current");
    const currentInfo = value.querySelector(".sub_menu");
    const currentParent = value.querySelector(".inner_menu");
    currentInfo.style.display = "none";
    currentParent.style.color = "black";
    currentParent.style.fontWeight = "400";
}))


