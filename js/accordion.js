//wait till it loads
window.addEventListener("load", function(event) {
  //get all accordions
  var accordions = document.getElementsByClassName('accordion-example__accordion-title');
  //loop thorugh
  for (var i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener('click', function() {
        this.classList.toggle('accordion-example__accordion-title--active');
      });
  }

});
