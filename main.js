const groceries=document.getElementsByClassName("groceries")[0];
const bin=document.getElementById("bin");
const pencil=document.getElementById("pencil");
const allItems=document.getElementById("allItems");
const userinput=document.getElementById("userinput");

bin.addEventListener("click", function(){
    allItems.innerHTML = "";
})

userinput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    additem();
})

function additem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "-   " + userinput.value ;

    allItems.insertAdjacentElement("beforeend" , h2);
    userinput.value="";

    h2.addEventListener("click" , function(){
        h2.style.textDecoration= "line-through";
        h2.style.textDecorationColor="white";

        
    
    })

    
}