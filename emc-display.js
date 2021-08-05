
function ok(){
    alert("Still Alive!");
}

function displayElement(item) {
    if (item.style.display === "none") {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
}

function displayNextSibling(item){
    let sibling = item.nextElementSibling;
    //change the display value of sibling to block or ""
    displayElement(sibling);
}

function displayChild(item, tier) {
    let child = item.childNodes[tier];
    displayElement(child);

}