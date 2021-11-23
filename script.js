 
function newItem(){

   let li = $('<li></li>');
   let inputValue = $('#input');
   li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     $('#list').append(li);
   }


   function crossOut() {
 		li.classList.toggle("strike");
 	}

 	li.on("dblclick", function crossOut() {li.toggleClass("strike")
   });


   let crossOutButton = $('<crossOutButton></crossOutButton>');crossOutButton.append(document.createTextNode('X'));


 	crossOutButton.on("click", deleteListItem);

   function deleteListItem()
 	

   $('#list').sortable();

}
