/*定义页面加载完毕后执行函数*/
function addLoadEvent(func) {
    var oldonLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonLoad();
            func();
        }
    }
}

/*页面加载完毕后执行函数*/
addLoadEvent(displayAbbreviations);

/*主体函数*/
function displayAbbreviations() {
    /*检查兼容性*/
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    /*遍历abbr元素，并将缩写和其title属性保存在数组defs中*/
    var abbreviations = document.getElementsByTagName("abbr");
    /*console.log(abbreviations[0]);*/
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abr = abbreviations[i];
        /*下面这条语句为了解决IE6不支持<abbr>标签的问题，如果当前元素没有子节点，立即跳出本次循环（注意，是跳出本次循环不是跳出for循环，之所以是小于1，是因为IE6浏览器在统计abbr元素的子节点个数时，总是返回一个错误的值0）*/
        if (current_abr.childNodes.length < 1) continue;
        /*IE6兼容性解决结束*/
        var definition = current_abr.getAttribute("title");
        var key = current_abr.lastChild.nodeValue;
        /*console.log(key);*/
        defs[key] = definition;
        /*console.log(defs);*/
    }

       /*创建标记*/
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    /*解决IE6兼容性，不过违背了结构化程序设计原则（一个元素应该只有一个入口和出口）*/
    if (dlist.childNodes.length < 1) return false;
    /*兼容性解决结束*/

    /*插入自定义列表*/
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    /*把标题添加到页面主题*/
    document.body.appendChild(header);
    /*把定义列表添加到页面主题*/
    document.body.appendChild(dlist);
}

