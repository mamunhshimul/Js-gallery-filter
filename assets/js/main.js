




filterSelection("all") //  show all item for defult 
function filterSelection(c) {
  var g_item, i;
  g_item = document.querySelector(".gallery-item");
  if (c == "all") c = "";

   for (i = 0; i < x.length; i++) {
    g_RemoveClass(g_item[i], "show");
    if (g_item[i].className.indexOf(c) > -1) g_AddClass(g_item[i], "show");
  }
}




function g_AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function g_RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
