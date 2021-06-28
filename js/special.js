let menu_info = document.querySelector("#info");
let subinfo = document.querySelector(".subinfo");
let location_img = document.querySelector("#location");
let location_subinfo = document.querySelector(".location_subinfo");
let category = document.querySelector("#category");
let category_info = document.querySelector(".category_info");
let gnb_menu = document.querySelector(".gnb_menu");
let category_tit = document.querySelector(".category_tit");
let ctrl = document.querySelector(".ctrl");
let category_box = document.querySelector(".category_box");
let ctrl_tit = document.querySelector(".ctrl_tit");

let gnb_menu_list = document.querySelectorAll(".gnb_menu_list");
const gnb_menu_lists = Array.from(gnb_menu_list);

let t4_menu = document.querySelectorAll(".t4_menu");
const t4_menu_lists = Array.from(t4_menu);

// -------------------새로 추가----------------------
let location_icon = document.querySelector("#location_img");

location_icon.addEventListener("mouseover", () => {
    location_icon.setAttribute('src', 'images/icons/ico_delivery_setting_checked.svg');
});
location_icon.addEventListener("mouseout", () => {
    location_icon.setAttribute('src', 'images/icons/ico_location.svg');
});

let cart_icon = document.querySelector("#cart_img");

cart_icon.addEventListener("mouseover", () => {
    cart_icon.setAttribute('src', 'images/icons/ico_cart_checked.svg');
});
cart_icon.addEventListener("mouseout", () => {
    cart_icon.setAttribute('src', 'images/icons/ico_cart.svg');
});


let all_icon = document.querySelector("#categoryAll_img");

category_info.addEventListener("mouseover", () => {
    all_icon.setAttribute('src', 'images/icons/ico_gnb_all_checked.png');
});
category_info.addEventListener("mouseout", () => {
    all_icon.setAttribute('src', 'images/icons/ico_all.png');
});

let inner_menus = document.querySelectorAll(".inner_menu");
const inner_menu = Array.from(inner_menus);

inner_menu.map(value => value.addEventListener("mouseover", () => {
    let all_icon = value.querySelector('img');
    all_icon.setAttribute('src', 'images/icons/icon_veggies_active_pc@2x.1586324570.png');
}));

inner_menu.map(value => value.addEventListener("mouseout", () => {
    let all_icon = value.querySelector('img');
    all_icon.setAttribute('src', 'images/icons/icon_veggies_inactive_pc@2x.1586324570.png');
}));

// -------------------새로 추가----------------------


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


t4_menu_lists.map(value => value.addEventListener("click", () => {
    checkClicked(value);
}));

const checkClicked = (target) => {
    t4_menu_lists.map(value => {
        target !== value ? value.classList.remove("t4_menu_on") : value.classList.add("t4_menu_on");
    })
};




