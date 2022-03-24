
var todoComplete = JSON.parse(localStorage.getItem("itemCompleted"))
console.log(todoComplete)

todoComplete.map(function(el){
    var tr = document.createElement("tr");
   
    var td1 = document.createElement("td");
    td1.innerText = el.itemName;
    var td2 = document.createElement("td");
    td2.innerText = el.itemQty;
    var td3 = document.createElement("td");
    td3.innerText = el.itemPrior;

    tr.append(td1,td2,td3)
    document.querySelector("#body").append(tr)
})