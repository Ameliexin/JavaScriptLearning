/**
 * Created by wangzhiang on 16/3/7.
 */
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title")
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}
