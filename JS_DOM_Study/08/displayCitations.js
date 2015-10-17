addLoadEvent(displayCitations);
function displayCitations() {

    if (!document.createTextNode || !document.getElementsByTagName || !document.createElement) return false;
    var quotes = document.getElementsByTagName("blockquote");
    for (var i = 0; i < quotes.length; i++) {
        if (!quotes[i].getAttribute("cite")) {
            continue;
        }
        var url = quotes[i].getAttribute("cite");

        /*查找元素*/
        var quoteElements = quotes[i].getElementsByTagName("*");
        if (quoteElements.length < 1) continue;
        var elem = quoteElements[quoteElements.length - 1];
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);

        /*插入连接*/
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }


}