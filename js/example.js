// ADD NEW ITEM TO END OF LIST
  var newNode = document.createElement("LI");
  var textNode = document.createTextNode("kale");
  newNode.appendChild(textNode);
  var list = document.getElementById("myList");
  list.appendChild(newNode);

// ADD NEW ITEM START OF LIST
  var newNode, textNode;
  textNode = document.createTextNode("cream");
  newNode = document.createElement("LI");
  newNode.appendChild(textNode);

  document.getElementById("myList").insertBefore(newNode, document.getElementById("one"));

// ADD A CLASS OF COOL TO ALL LIST ITEMS
  var items = document.getElementsByTagName("li");
  items.className = "cool";

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
  var count = list.childNodes.length;
  var heading = document.getElementById("header");
  var textCount = document.createTextNode(count);
  heading.appendChild(textCount);
