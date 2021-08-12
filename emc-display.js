
const DETAILBOXES = ["consulting-details, chess-details, support-details","about-details"]

function k(message = "Still Alive!") {
    alert(message);
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

function slide(item) {
    item.__toggle = !item.__toggle;
    var target = document.getElementById('hidden_content');
    if( this.__toggle) {
        target.style.height = target.scrollHeight+"px";
        this.firstChild.nodeValue = "Hide content";
    }
    else {
        target.style.height = 0;
        this.firstChild.nodeValue = "Show content";
    }
}

function shineButton(item) {
    item.style.backgroundColor = "#55ec72";
    item.style.color = "black";
    item.style.borderColor = "black";
}
function normalButton(item) {
    item.style.backgroundColor = "rgb(60,44,91)";
    item.style.color = "white";
    item.style.borderColor = "white";
}
function showDetails(option) {
    let id = option.id;
    let detailId = id + "-details";
    let detail = document.getElementById(detailId);
    let detailBox = document.getElementById("line2-1");
    displayElement(detailBox);
    displayElement(detail);
}
function hideDetails(option) {
    let id = option.id;
    let detailId = id + "-details";
    let detail = document.getElementById(detailId);
    let detailBox = document.getElementById("line2-1");
    hideElement(detailBox);
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
    //here to show is the consulting div
    //and the chess div is a sibling
    //lets pick the only displaying sibling!
    toShow.style.display = 'block';
    toHide.style.display = 'none';
}
//on mouseover we display and on mouseleave we hide
//problem elements are figcaption h3 and p
//pick p for instance
//first we make a function that displays only
