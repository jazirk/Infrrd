
//const createButton=document.getElementById('Add');
var ul = document.getElementById("list");

function newItem() {
  var item = document.getElementById("input").value;
  if(item!=''){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("- " + item));
  ul.appendChild(li);
  document.getElementById("input").value = "";
  li.onclick = removeItem;
  document.querySelector('#listitems').style.display = 'block';
  document.querySelector('p').style.display='block';
  }
  else
  alert('Enter The task');
}
var createButton=document.getElementById('Add');
createButton.addEventListener("click",event=>{
  newItem();
});

function removeItem(item)
{
   item.target.parentElement.removeChild(item.target);
   if(ul.innerHTML== ''){
   document.querySelector('#listitems').style.display = 'none';
   document.querySelector('p').style.display='none';
   }
}

