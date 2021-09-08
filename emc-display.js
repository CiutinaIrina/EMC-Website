
const DETAILBOXES = ["consulting-details, chess-details, support-details","about-details"]

function k(message = "Still Alive!") {
    alert(message);
}

function tec(element, clas) {
    if (element.classList.contains(clas)) {
        element.classList.remove(clas);
    }
    else {
        element.classList.add(clas);
    }
}

function flip(item) {
    if (item.classList.contains("flip")) {
        item.classList.remove("flip");
        item.classList.add("rev");
    }
    else {
        item.classList.remove("rev");
        item.classList.add("flip");
    }
}

function slideToggle(item) {
    tec(item, "slideup");
}

function sendLink(link) {
    tec(link, "green-link");
}

function alertButton(item) {
    item.style.borderBottom = '5px solid #55ec72';
    let writng = item.children[0];
    writng.style.color = '#55ec72';
}
function normalButton(item) {
    item.style.borderBottom = '5px solid rgb(60,44,91)';
    let writng = item.children[0];
    writng.style.color = 'white';
}

function showTableMenu() {
    var menu = document.getElementById("menu-tabletop");
    tec(menu, "hidden");
}

function getPictureByIndex(index) {
    let id = "pic" + index;
    let picture = document.getElementById(id);
    return picture;
}

async function prevPicture(index) {
    let prevIndex = index - 1;
    if (index == 1) {
        prevIndex = 9;
    }
    let current = getPictureByIndex(index);
    let prev = getPictureByIndex(prevIndex);
    prev.classList.remove("hidden");
    current.classList.add("hidden");
}
async function nextPicture(index) {
    let nextIndex = index + 1;
    if (index == 9) {
        nextIndex = 1;
    }
    let current = getPictureByIndex(index);
    let next = getPictureByIndex(nextIndex);
    next.classList.remove("hidden");
    current.classList.add("hidden");
}

function displayElement(item) {
    if (item.style.display === "none") {
        item.style.display = "block";
    } else {
        item.style.display = "block";
    }
    item.style.height = item.scrollHeight + "px";
}
function hideElement(item) {
    if (item.style.display === "block") {
        item.style.display = "none";
    } else {
        item.style.display = "none";
    }
    item.style.height = 0;
}


function displayNextSibling(item){
    let sibling = item.nextElementSibling;
    displayElement(sibling);
}
function displayChild(item, tier) {
    let child = item.children[tier];
    displayElement(child);
}
function hideNextSibling(item){
    let sibling = item.nextElementSibling;
    hideElement(sibling);
}
function hideChild(item, tier) {
    let child = item.children[tier];
    hideElement(child);
}


function slideIn(item) {
    item.classList.remove("slideup");
    item.classList.add("slidedown");
}
function slideOut(item) {
    item.classList.remove("slidedown");
    item.classList.add("slideup");
}
function slideLeft(item) {
    item.classList.remove("slideright");
    item.classList.add("slideleft");
}
function slideRight(item) {
    item.classList.remove("slideleft");
    item.classList.add("slideright");
}


function toggleSlide(item){
    if (item.classList.contains("slideleft")) {
        slideRight(item)
    }
    else if (item.classList.contains("slideright")) {
        slideLeft(item)
    }
}

function sendLink(link) {
    if (link.classList.contains("green-link")) {
        link.classList.remove("green-link");
    } else {
        link.classList.add("green-link");
    }
}



function alertButton(item) {
    item.style.borderBottom = '5px solid #55ec72';
    let writng = item.children[0];
    writng.style.color = '#55ec72';
}
function normalButton(item) {
    item.style.borderBottom = '5px solid rgb(60,44,91)';
    let writng = item.children[0];
    writng.style.color = 'white';
}
function showDetails(option) {
    let id = option.id;
    let detailId = id + "-details";
    let detail = document.getElementById(detailId);
    displayElement(detail);
}
function hideDetails(option) {
    let id = option.id;
    let detailId = id + "-details";
    let detail = document.getElementById(detailId);
    hideElement(detail);
}

function getAllSiblings(element, parent) {
        const children = [parent.children];
        return children.filter(child => child !== element);
    }

function toggleDetails(option) {
    let id = option.id;
    let detailId = id + "-details";
    let detail = document.getElementById(detailId);
    let detailBox = document.getElementById("line2-1");
    let empty = document.getElementById("empty-detail");
    let emptyBox = document.getElementById("empty-box");
    if (detail.style.display === "block") {
        swap(emptyBox, detailBox);
        swap(empty, detail);
    }
    else {
        swap(detailBox, emptyBox);
        swap(detail, empty);
    }
}

function clearOtherInstances(array, element) {
    for (i = 0; i < array.length; i++){
        if (array[i] != element) {
            let clearedElement = document.getElementById(array[i]);
            clearedElement.style.display = "none";
        }
    }
}

function swap(toShow, toHide) {
    toShow.style.display = 'block';
    toHide.style.display = 'none';
}
function showSubCategories(option) {
    let id = option.id;
    let detailId = id + "-details";
    let detail = document.getElementById(detailId);
    displayElement(detail);
}



function findActivePicture() {
    for (i = 1; i <= 9; i++) {
        let picture = getPictureByIndex(i);
        if (picture.classList.contains("hidden") === false) {
            return i;
        }
    }
}

function alertOption(item){
    item.style.color = "#55ec72";
}
function normalOption(item){
    item.style.color = "white";
}



var slideIndex = 1;
showSlides();

var slides = document.getElementById('good').children();
k(slides);

function showSlides() {
    setTimeout(showSlides, 9000);
    nextPicture(findActivePicture());
}

function dateConvertor(dateString) {
    const date = dateString.split();
    const day = date[0];
    const month = date[1];
    const year = date[2];
    if (day.length == 1) {
        day = "0" + day;
    }
    month = month.toUpperCase();
    switch (month) {
        case ("IANUARIE"):
            month = "01";
            break;
        case ("FEBRUARIE"):
            month = "02";
            break;
        case ("MARTIE"):
            month = "03";
            break;
        case ("APRILIE"):
            month = "04";
            break;
        case ("MAI"):
            month = "05";
            break;
        case ("IUNIE"):
            month = "06";
            break;
        case ("IULIE"):
            month = "07";
            break;
        case ("AUGUST"):
            month = "08";
            break;
        case ("SEPTEMBRIE"):
            month = "09";
            break;
        case ("OCTOMBRIE"):
            month = "10";
            break;
        case ("NOEMBRIE"):
            month = "11";
            break;
        case ("DECEMBRIE"):
            month = "12";
            break;
        
    }
    date = year + "--" + month + "--" + day;
    return date;

}
