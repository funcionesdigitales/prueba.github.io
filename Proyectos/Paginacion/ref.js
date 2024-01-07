var pageNumber = 1;
var pageSize = 2;
var noticias = ["1", "2", "3"];
var noticiasHtml = "";
var pagination;
var pageCont = Math.ceil(noticias.length / pageSize);
function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
function nextPage() {
    pageNumber++;
    showNoticias(pagination)
}
function previusPage() {
    pageNumber--;
    showNoticias(pagination)
}
function showNoticias(_noticias) {
    var pagination = paginate(noticias, pageSize, pageNumber);
    console.log("nextPage", pagination)
    noticiasHtml = "<ul>";
    pagination.forEach(element => {
        console.log(element)
        noticiasHtml += "<li>" + element + "</li>";
    });
    noticiasHtml += "</ul>"
    noticiasHtml += pageNumber > 1 ? " <button onclick='previusPage()'> < </button>" : "";
    noticiasHtml += pageNumber < pageCont ? (" <button onclick='nextPage()'> > </button>") : "";
    document.getElementById("noticias").innerHTML = "";
    document.getElementById("noticias").innerHTML = noticiasHtml;
}
showNoticias(noticias);