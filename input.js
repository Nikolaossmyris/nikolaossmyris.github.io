const aside = document.getElementsByTagName("aside")[0];

function loadContent(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("mainContent").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url + ".html", true);
  xhttp.send();
  let active = aside.querySelector(".active");
  if(active){
    active.classList.remove("active");
  }
  let nav = aside.querySelector("#" + url);
  if(nav){
    nav.classList.add("active");
  }
}

loadContent('biography');

const asideButtons = document.getElementsByClassName("aside-button");

if(asideButtons) {
  for(var asideButton of asideButtons) {
    asideButton.addEventListener('click', ToggleDiv);
  }
}

function ToggleDiv(e) {
  let dynamicDiv = document.getElementsByClassName("dynamic-div")[0];
  if(dynamicDiv){
    dynamicDiv.querySelector(".active").classList.remove("active");
    dynamicDiv.querySelector("#" + e.currentTarget.dataset.target).classList.add("active");
  }
}