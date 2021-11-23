function newItem() {


  let list = $('<li></li>');
  let inputValue = $('#input').val
  list.append(inputValue);

  if (inputValue === '') {
    alert('You must write something')
  } else {
    $('#list').append(list)
  }


  function crossOut() {
    list.classList.toggle('strike');
  }

  list.on('dblclick', function crossOut() {
    list.toggleClass('strike');
  });

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  list.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    list.addClass("delete")
  }
  $('#list').sortable();
}
