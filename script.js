const item = document.querySelector("#item");
const toDoBox =document.querySelector("#to-do-box");
const preListItem = document.querySelector("#to-do-box li");

function validateItem(item) {
    return item.value.length > 0;
}

item.addEventListener("keyup", // as soon as the user enters something("keyup"), function(event) is called.
    function(event) { //event refers to the keys pressed while entering a task(i.e., backspace,q,w,e,r,t,y,etc)
        if(event.key =="Enter" && validateItem(this)) { //If enter key is pressed, the text entered(in the text box) is passed to addToDo() function
            addToDo(this.value);
            this.value="";// After the entered value is passed to addToDo() function, the entered text disappears from the text box
        }
    }
)
function addToDo(item) {
    const listItem = document.createElement("li");//creates a list item for the list
    listItem.innerHTML = item +  `<i class = "fas fa-times"></i>`; // text + "x" symbol is added to a new list.
    listItem.addEventListener("click", function() {
        this.classList.toggle("done"); //"done" here is a class name
    }); //As soon as a list item is clicked, a line-through appears, marking it as a completed task
    listItem.querySelector("i").addEventListener("click", function() {
        listItem.remove();
    }); //As soon as the "x" symbol is pressed, the list item is deleted
    toDoBox.appendChild(listItem); // adds a list item in the list  
}
preListItem.querySelector("i").addEventListener("click", function() {
    preListItem.remove();
})//removes the first item in the list that is pre defined
preListItem.addEventListener("click", function() {
    this.classList.toggle("done");
})// marks a strikethrough across the first line that is pre-defined