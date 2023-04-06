function changeSchemeToGray() {
    let navAElement = document.getElementById("navId").children;
    let navAs = document.getElementsByClassName("aNav");
    let sidebarAs = document.getElementsByClassName("sidebarLi");
    let lis = document.querySelectorAll("li");


    document.body.style.backgroundColor =  "rgb(208, 208, 208)";
    document.body.style.color = "rgb(0, 0, 0)";
    document.getElementById("navId").classList.add("changeNavGray");
    document.getElementById("navId").classList.remove("changeNavSun");
    for (let i = 0; i < navAElement.length; i = i + 1) {
        navAElement[i].style.color = "rgb(206, 206, 206)";
    }
    document.getElementById("sidebarId").classList.add("changeSideBarGray");
    document.getElementById("sidebarId").classList.remove("changeSideBarSun");
    document.getElementById("mainId").classList.add("changeMainGray");
    document.getElementById("mainId").classList.remove("changeMainSun");
    document.getElementById("validate").style.backgroundColor = "rgb(208, 208, 208)";

    for (let i = 0; i < lis.length; i = i + 1){
        lis[i].style.color = "black";
        lis[i].children[0].style.color = "black";
    }

    for (let i = 0; i < sidebarAs.length; i = i + 1){
        sidebarAs[i].style.color = "rgb(206, 206, 206)";
        sidebarAs[i].children[0].style.color = "rgb(206, 206, 206)";
    }

    function mouseOverHandlerGray(event){
        event.target.style.color = "rgb(133, 133, 133)";
    }

    function mouseOutHandlerGray(event){
        event.target.style.color = "rgb(206, 206, 206)";
    }

    for (let i = 0; i < navAs.length; i = i + 1){
        navAs[i].addEventListener("mouseover", mouseOverHandlerGray);
        navAs[i].addEventListener("mouseout", mouseOutHandlerGray);
    }

    for (let i = 0; i < sidebarAs.length; i = i + 1){
        sidebarAs[i].addEventListener("mouseover", mouseOverHandlerGray);
        sidebarAs[i].addEventListener("mouseout", mouseOutHandlerGray);
    }

    localStorage.setItem("theme", "Gray");
}

function changeSchemeToPink(){
    let navAElement = document.getElementById("navId").children;
    let navAs = document.getElementsByClassName("aNav");
    let x = document.querySelectorAll("li");
    let sidebarAs = document.getElementsByClassName("sidebarLi");


    document.body.style.backgroundColor =  "rgb(243,221,224)";
    document.body.style.color = "rgb(33,55,98)";
    document.getElementById("navId").classList.remove("changeNavGray");
    document.getElementById("navId").classList.remove("changeNavSun");
    for (let i = 0; i < navAElement.length; i = i + 1) {
        navAElement[i].style.color = "rgb(33,55,98)";
    }
    document.getElementById("sidebarId").classList.remove("changeSideBarGray");
    document.getElementById("sidebarId").classList.remove("changeSideBarSun");
    document.getElementById("mainId").classList.remove("changeMainGray");
    document.getElementById("mainId").classList.remove("changeMainSun");
    document.getElementById("validate").style.backgroundColor = "rgb(243,221,224)";
    for (let i = 0; i < x.length; i = i + 1){
        x[i].style.color = "rgb(33,55,98)";
        x[i].children[0].style.color = "rgb(33,55,98)";
    }

    function mouseOverHandlerNavPink(event){
        event.target.style.color = "rgb(162,194,231)";
    }

    function mouseOutHandlerPink(event){
        event.target.style.color = "rgb(33,55,98)";
    }

    function mouseOverHandlerSidebarPink(event){
        event.target.style.color = "rgb(184,164,236)";
    }

    for (let i = 0; i < navAs.length; i = i + 1){
        navAs[i].addEventListener("mouseover", mouseOverHandlerNavPink);
        navAs[i].addEventListener("mouseout", mouseOutHandlerPink);
    }

    for (let i = 0; i < sidebarAs.length; i = i + 1){
        sidebarAs[i].addEventListener("mouseover", mouseOverHandlerSidebarPink);
        sidebarAs[i].addEventListener("mouseout", mouseOutHandlerPink);
    }
    localStorage.setItem("theme", "Pink");
}

function changeSchemeToSunset(){
    let navAElement = document.getElementById("navId").children;
    let navAs = document.getElementsByClassName("aNav");
    let sidebarAs = document.getElementsByClassName("sidebarLi");
    let lis = document.querySelectorAll("li");


    document.body.style.backgroundColor =  "rgb(245, 185, 144)";
    document.body.style.color = "rgb(58, 37, 10)";
    document.getElementById("navId").classList.add("changeNavSun");
    for (let i = 0; i < navAElement.length; i = i + 1) {
        navAElement[i].style.color = "rgb(255, 243, 229)";
    }
    document.getElementById("sidebarId").classList.add("changeSideBarSun");
    document.getElementById("mainId").classList.add("changeMainSun");
    document.getElementById("validate").style.backgroundColor = "rgb(245, 185, 144)";

    for (let i = 0; i < lis.length; i = i + 1){
        lis[i].style.color = "rgb(58, 37, 10)";
        lis[i].children[0].style.color = "rgb(58, 37, 10)";
    }

    for (let i = 0; i < sidebarAs.length; i = i + 1){
        sidebarAs[i].style.color = "rgb(255, 243, 229)";
        sidebarAs[i].children[0].style.color = "rgb(255, 243, 229)";
    }

    function mouseOverHandlerNavSun(event){
        event.target.style.color = "rgb(241, 193, 175)";
    }

    function mouseOutHandlerSun(event){
        event.target.style.color = "rgb(255, 243, 229)";
    }

    function mouseOverHandlerSidebarSun(event){
        event.target.style.color = "rgb(234, 164, 141)";
    }

    for (let i = 0; i < navAs.length; i = i + 1){
        navAs[i].addEventListener("mouseover", mouseOverHandlerNavSun);
        navAs[i].addEventListener("mouseout", mouseOutHandlerSun);
    }

    for (let i = 0; i < sidebarAs.length; i = i + 1){
        sidebarAs[i].addEventListener("mouseover", mouseOverHandlerSidebarSun);
        sidebarAs[i].addEventListener("mouseout", mouseOutHandlerSun);
    }
    localStorage.setItem("theme", "Sunset");
}

const grayButton = document.getElementById('grayButton');
const pinkButton = document.getElementById('pinkButton');
const sunsetButton = document.getElementById('sunsetButton');

grayButton.addEventListener("click", changeSchemeToGray);
pinkButton.addEventListener("click", changeSchemeToPink);
sunsetButton.addEventListener("click", changeSchemeToSunset);

if (localStorage.getItem("theme") === "Gray"){
    changeSchemeToGray();
}

if (localStorage.getItem("theme") === "Pink"){
    changeSchemeToPink();
}

if (localStorage.getItem("theme") === "Sunset"){
    changeSchemeToSunset();
}

function validateForm(event) {
    let myForm = document.querySelector("#contactForm");

    myForm.firstName.style.backgroundColor = "white";
    myForm.firstName.style.border = "none";
    myForm.lastName.style.backgroundColor = "white";
    myForm.lastName.style.border = "none";
    myForm.emailAddress.style.backgroundColor = "white";
    myForm.emailAddress.style.border = "none";
    myForm.email.style.backgroundColor = "white";
    myForm.email.style.border = "none";

    if (myForm.firstName.value == 0) {
        myForm.firstName.style.backgroundColor = "rgb(255, 166, 166)";
        myForm.firstName.style.border = "2px red solid";
    }

    if (myForm.lastName.value.length == 0) {
        myForm.lastName.style.backgroundColor = "rgb(255, 166, 166)";
        myForm.lastName.style.border = "2px red solid";
    }

    if (myForm.emailAddress.value == 0) {
        myForm.emailAddress.style.backgroundColor = "rgb(255, 166, 166)";
        myForm.emailAddress.style.border = "2px red solid";
    }

    if (myForm.emailAddress.value == 0) {
        myForm.email.style.backgroundColor = "rgb(255, 166, 166)";
        myForm.email.style.border = "2px red solid";
    }
}

function mouseOverForm(event){
    event.target.style.backgroundColor = "rgb(224, 255, 255)";
}

function mouseOutForm(event){
    event.target.style.backgroundColor = "rgb(255, 255, 255)";
}

let formInputs = document.getElementsByClassName("formInput");

for (let i = 0; i < formInputs.length; i = i + 1){
    formInputs[i].addEventListener("mouseover", mouseOverForm);
    formInputs[i].addEventListener("mouseout", mouseOutForm);
}

let myForm = document.querySelector("#contactForm");
myForm.validate.addEventListener("click", validateForm);

function checkChangePage(event){
    let okPressed = window.confirm("Would you like to open a new tab?");
    if(!okPressed){
        event.preventDefault();
    }
}

let YouTube = document.getElementById("YouTube");
let Facebook = document.getElementById("Facebook");
let Twitter = document.getElementById("Twitter");
let Instagram = document.getElementById("Instagram");

let YouTubeBig = document.getElementById("YouTubeBig");
let FacebookBig = document.getElementById("FacebookBig");
let TwitterBig = document.getElementById("TwitterBig");
let InstagramBig = document.getElementById("InstagramBig");

YouTube.addEventListener("click", checkChangePage)
Facebook.addEventListener("click", checkChangePage);
Twitter.addEventListener("click", checkChangePage);
Instagram.addEventListener("click", checkChangePage);

YouTubeBig.addEventListener("click", checkChangePage)
FacebookBig.addEventListener("click", checkChangePage);
TwitterBig.addEventListener("click", checkChangePage);
InstagramBig.addEventListener("click", checkChangePage);