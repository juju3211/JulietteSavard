function changeSchemeToGray() {
    let navAElement = document.getElementById("navId").children;
    let navAs = document.getElementsByClassName("aNav");
    let sidebarAs = document.getElementsByClassName("sidebarLi");
    let x = document.querySelectorAll("li");
    let tableHeader = document.getElementById("table").getElementsByTagName("th");
    let tableRow = document.getElementById("table").getElementsByTagName("td");


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

    for (let i = 0; i < x.length; i = i + 1){
        x[i].style.color = "rgb(206, 206, 206)";
        x[i].children[0].style.color = "rgb(206, 206, 206)";
    }

    for (let i = 0; i < tableHeader.length; i = i + 1){
        tableHeader[i].style.borderColor = "black";
    }

    for(let i=0; i <tableRow.length; i = i + 1) {
        tableRow[i].style.borderColor = "black";
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
    let tableHeader = document.getElementById("table").getElementsByTagName("th");
    let tableRow = document.getElementById("table").getElementsByTagName("td");


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
    for (let i = 0; i < x.length; i = i + 1){
        x[i].style.color = "rgb(33,55,98)";
        x[i].children[0].style.color = "rgb(33,55,98)";
    }

    for (let i = 0; i < tableHeader.length; i = i + 1){
        tableHeader[i].style.borderColor = "rgb(209, 209, 209)";
    }

    for(let i=0; i <tableRow.length; i = i + 1) {
        tableRow[i].style.borderColor = "rgb(209, 209, 209)";
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
    let x = document.querySelectorAll("li");
    let sidebarAs = document.getElementsByClassName("sidebarLi");
    let tableHeader = document.getElementById("table").getElementsByTagName("th");
    let tableRow = document.getElementById("table").getElementsByTagName("td");


    document.body.style.backgroundColor =  "rgb(245, 185, 144)";
    document.body.style.color = "rgb(58, 37, 10)";
    document.getElementById("navId").classList.add("changeNavSun");
    for (let i = 0; i < navAElement.length; i = i + 1) {
        navAElement[i].style.color = "rgb(255, 243, 229)";
    }
    document.getElementById("sidebarId").classList.add("changeSideBarSun");
    document.getElementById("mainId").classList.add("changeMainSun");
    for (let i = 0; i < x.length; i = i + 1){
        x[i].style.color = "rgb(255, 243, 229)";
        x[i].children[0].style.color = "rgb(255, 243, 229)";
    }

    for (let i = 0; i < tableHeader.length; i = i + 1){
        tableHeader[i].style.borderColor = "rgb(225, 144, 86)";
    }

    for(let i=0; i <tableRow.length; i = i + 1) {
        tableRow[i].style.borderColor = "rgb(225, 144, 86)";
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

YouTube.addEventListener("click", checkChangePage)
Facebook.addEventListener("click", checkChangePage);
Twitter.addEventListener("click", checkChangePage);
Instagram.addEventListener("click", checkChangePage);