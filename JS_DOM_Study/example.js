/*
var shopping = document.getElementById("purchases");
alert(shopping.getAttribute("title"));
shopping.setAttribute("title","a lst of goods");
alert(shopping.getAttribute("title"));
*/
var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++) {
    var title_text = paras[i].getAttribute("title");
    alert(paras.length);
    alert(paras[i].getAttribute("title"));
    if (title_text) { //paras里有两个元素，但是第二个P元素并没有title的值，故它的title_text的值为NULL,所以他的if语句为False,不执行
        paras[i].setAttribute("title", "brand new title text");
        alert(paras[i].getAttribute("title"));
    }

}