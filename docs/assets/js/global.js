// top navigation toggle button for mobile devices
var toggleNav = function () {
    var navMenuClasses = document.getElementById("navbar-collapse").classList;
    if (navMenuClasses.contains('collapse')) {
        navMenuClasses.remove("collapse");
    }
    else {
        navMenuClasses.add("collapse");
    }
};
var navbarButton = document.getElementById("navbar-button");
navbarButton.addEventListener("click", toggleNav, false);
// make reference list hidden by default to declutter article view
var refListHeader = document.getElementById("reference-list");
var refListContent = document.getElementById("reference-list-content");
if (refListHeader !== null && refListContent !== null) {
    // only some articles contain reference list
    refListContent.style.display = 'none';
    refListHeader.innerHTML = "<span id='show-reference-list'>Rozwiń listę odniesień ▾</button>";
    function showReferenceList(ev) {
        var refListHeader = document.getElementById("reference-list");
        var refListContent = document.getElementById("reference-list-content");
        refListHeader.innerHTML = "Lista odniesień";
        refListContent.style.display = 'block';
    }
    var refListButton = document.getElementById("show-reference-list");
    refListButton.onclick = showReferenceList;
    // on in-text reference click, show reference list before navigating to it
    var inTextReferences = document.getElementsByClassName
        ? document.getElementsByClassName('resource-reference') // modern browsers
        : document.querySelectorAll('.resource-reference'); // ie8
    for (var i = 0; i < inTextReferences.length; ++i) {
        var inTextReference = inTextReferences[i];
        inTextReference.onclick = showReferenceList;
    }
}
// Google global analytics could be placed here, but I see no need now
//# sourceMappingURL=global.js.map