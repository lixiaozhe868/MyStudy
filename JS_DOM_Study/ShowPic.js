function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createElement) return true;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "img/01.png");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this);
        }

        links[i].onkeypress = links.onclick;
    }
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) return false;
    if (whichpic.getAttribute("title")) {
        var text = whichpic.getAttribute("title");
    } else {
        var text = "";
    }

    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

//window.onload = preparePlaceholder;
//
//function preparePlaceholder() {
//    /*兼容性检测*/
//    if (!document.createElement) return false;
//    if (!document.createTextNode) return false;
//    if (!document.getElementById) return false;
//    if (!document.getElementsByTagName) return false;
//    if (!document.getElementById("imagegallery")) return false;
//    /*兼容性检测结束*/
//
//    /*动态生成替换区域*/
//    var placeholder = document.createElement("img");
//    placeholder.setAttribute("id", "placeholder");
//    placeholder.setAttribute("src", "img/01.png");
//    placeholder.setAttribute("alt", "my image gallery");
//    var description = document.createElement("p");
//    var desctext = document.createTextNode("choose an image");
//    description.appendChild(desctext);
//    var gallery = document.getElementById("imagegallery");
//    gallery.parentNode.insertBefore(placeholder, gallery);
//    gallery.parentNode.insertBefore(description, gallery);
//    /*动态生成替换区域结束*/
//
//    //document.body.appendChild(placeholder);
//    //document.body.appendChild(description);
//
//}
//
//   /*点击事件监听*/
//
//function showPic(whichpic) {
//    var source = whichpic.getAttribute("href");
//    var image = document.getElementById("placeholder");
//    image.setAttribute("src", source);
//    var title = whichpic.getAttribute("title");
//    image.setAttribute("alt", title);
//    document.getElementsByTagName("p")[0].firstChild.nodeValue = title;
//}
//
///*监听事件结束*/
//
///*window.onload = function(){
//    var links=document.getElementsByTagName("a");
//    for(var i;i<links.length;i++){
//        if(links[i].getAttribute("class")=="popup"){
//            popUp(this.getAttribute("href"));
//            return false;
//        }
//    }
//}
//
//function popUp(winURL){
//    window.open(winURL,"popup","width=320,height=480");
//}
//*/