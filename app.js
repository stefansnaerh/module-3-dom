// ----- display loading screen animation -------
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000); // setTimeout for 3 seconds
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
// ----- Display a clock ---------
setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}




// ------ Event listener /  ----------------

// event listener associated with the <ul> so you can delete tasks
const list = document.querySelector('#task-list ul')

list.addEventListener('click', function(e){// add event listener
  if(e.target.className =='delete'){} // if you click on the delete button
    const li = e.target.parentElement;
    list.removeChild(li)// remove the clicked <li> element 
})

