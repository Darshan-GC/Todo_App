console.log("Script Loaded")


var dataInput= document.getElementById("data_input")
var button1= document.getElementById("button")
var listData= document.getElementById("list_data")
var listWrapper= document.getElementById("list_wrapper")
var listItem=document.getElementById("lit_item")
// var deleteIcon=document.getElementById("delete_icon")



listWrapper.addEventListener("submit",function(e){
  e.preventDefault();
})


button1.addEventListener("click",function(){
    if(dataInput.value==""||dataInput.value==" ")
    {
      alert("Please Enter ToDo Item")
      return;
    }

    var card= document.createElement("div")
    card.className="list_item";
    var wrappeNameDate=document.createElement("div")
    var nameIn=document.createElement("h3")
    var paraIn=document.createElement("p")
    nameIn.innerHTML= dataInput.value;
    var currentData= new Date;
    paraIn.innerHTML= "Date "+currentData.getDate()+"-"+(currentData.getMonth()+1)+"-"+currentData.
    getUTCFullYear()+"/Time "+currentData.getHours()+":"+currentData.getMinutes()+":"+currentData.getSeconds()
    wrappeNameDate.appendChild(nameIn);
    wrappeNameDate.appendChild(paraIn);
    paraIn.className="date_time"
    card.appendChild(wrappeNameDate);
    var wrapIcon=document.createElement("div")
    wrapIcon.className="delete_icon"
    var deleteIcon=document.createElement("i")
    deleteIcon.className="far fa-trash-alt"
    wrapIcon.appendChild(deleteIcon)
    card.appendChild(wrapIcon)
    deleteIcon.addEventListener("click",function(){
      card.remove();
    })
    nameIn.addEventListener("dblclick",function(){
      nameIn.remove();
      var nameIn1=document.createElement("input")
      wrappeNameDate.prepend(nameIn1);
      nameIn1.className="data_input"
      nameIn1.value=nameIn.innerText;
      nameIn1.addEventListener("blur",function(){
       
        if(nameIn1.value==""||nameIn1.value==" ")
    {
      alert("Please Enter ToDo Item")
      return;
    }   
        nameIn1.remove();
        nameIn.innerHTML=nameIn1.value;
        var currentData= new Date;
        paraIn.innerHTML= "Date "+currentData.getDate()+"-"+(currentData.getMonth()+1)+"-"+currentData.
    getUTCFullYear()+"/Time "+currentData.getHours()+":"+currentData.getMinutes()+":"+currentData.getSeconds()
        wrappeNameDate.prepend(nameIn);
        wrappeNameDate.appendChild(paraIn)
        console.log(nameIn.innerHTML)
    })
    })
    listData.prepend(card);
    dataInput.value="";

})


