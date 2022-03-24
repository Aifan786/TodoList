var todoItems = JSON.parse(localStorage.getItem("itemList"))
console.log(todoItems);

var Complete = JSON.parse(localStorage.getItem("itemCompleted"))||[];
todoItems.map(function(el,ind){

    var tr = document.createElement("tr");
   
    var td1 = document.createElement("td");
    td1.innerText = el.itemName;
    var td2 = document.createElement("td");
    td2.innerText = el.itemQty;
    var td3 = document.createElement("td");
    td3.innerText = el.itemPrior;
    var td4 = document.createElement("td");
    td4.textContent = "Complete";
    td4.style.color = "red";
    td4.style.cursor = "pointer";
    td4.addEventListener("click",function(){
        markCompleted(el,ind)
    })

    tr.append(td1,td2,td3,td4)
    document.querySelector("#body").append(tr)

})

function markCompleted(el,ind){
    Complete.push(el)
    localStorage.setItem("itemCompleted", JSON.stringify(Complete))
}