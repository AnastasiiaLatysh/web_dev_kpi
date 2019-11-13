function showMoreInfo(obj) {

  // Remove button "Show more Info"
  document.getElementById("showMoreBuses").remove();

  // Create new list element
  var list = document.createElement("ul");

  // Add child elements to list node
  for (i = 1; i < 11; i++) {
    var listElement = document.createElement("li");
    var listText = document.createTextNode("Bus tour number " + i);
    listElement.appendChild(listText);
    list.appendChild(listElement);
}
  // Create button to hide info about buses
  var hideButton = document.createElement("button");
  var hideButtonText = document.createTextNode("Hide all");
  hideButton.appendChild(hideButtonText);
  hideButton.setAttribute("id", "hideButton");
  hideButton.setAttribute("onClick", "JavaScript:hideInfo(this)")

  // Add button and list to content
  var content = document.getElementById("content");
  content.appendChild(list);
  content.appendChild(hideButton);
};


function hideInfo(obj) {
  // Remove hide info button
  document.getElementById("hideButton").remove();
  listElemenets = document.querySelectorAll('#content > li');

  // Remove all elements inside node with id=content
  var content = document.getElementById("content");
  content.innerHTML = '';

  // Create button "Show more Info"
  var showButton = document.createElement("button");
  var showButtonText = document.createTextNode("Click here to see more");

  // Add button to node with id=content
  showButton.appendChild(showButtonText);
  showButton.setAttribute("id", "showMoreBuses");
  showButton.setAttribute("onClick", "JavaScript:showMoreInfo(this)")
  content.appendChild(showButton);
};
