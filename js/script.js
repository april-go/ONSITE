$(window).on("load", start);

function start(){

    $('#slideshow').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });


}

$(document).on("click", "#nav a[href]", nav);

function nav(e) {

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/" + href);

    $("#nav a").fadeTo("fast", 0.25);
    $(this).fadeTo("fast", 1);

    $("#nav_left").fadeTo(0, 0);

    if (href == "home.html") {

        $("#nav_title").text("ONSITE");
    
    } else if (href == "search.html") {

        $("#nav_title").text("Search");
        
    } else if (href == "faves.html") {

        $("#nav_title").text("My Favorites");
        
    } else if (href == "profile.html") {

        $("#nav_title").text("Profile");
        
    } else if (href == "cart.html") {

      $("#nav_title").text("My Cart");
    
    } 
      
}

$(document).on("click", "#content a[href]", contentNav);

function contentNav(e) {

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/" + href);

    $("#nav_left").fadeTo(0, 1);
    $("#nav_title").text("ONSITE");

    if (href == "cart.html") {

      $("#nav_left").fadeTo(0, 1);
      $("#nav_title").text("My Cart");
      
    } else if (href =="huarache.html") {

      $("#nav_left").fadeTo(0, 1);
      $("#nav_title").text("Air Huarache");

    } else if (href =="ma2.html") {

      $("#nav_left").fadeTo(0, 1);
      $("#nav_title").text("Jordan MA2");

    } else if (href =="jordan5.html") {

      $("#nav_left").fadeTo(0, 1);
      $("#nav_title").text("Jordan 5");

    } else if (href =="dunk.html") {

      $("#nav_left").fadeTo(0, 1);
      $("#nav_title").text("SB Dunk Low Pro");
      
    }
		
		
  } 
  
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {

  var button = event.relatedTarget

  var recipient = button.getAttribute('data-bs-whatever')

  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})

filterSelection("all") 
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


function w3RemoveClass(element, name) {
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


var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Search 

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
