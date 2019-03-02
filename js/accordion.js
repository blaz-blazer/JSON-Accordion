//wait till it loads
window.addEventListener("load", function(event) {
  //get all accordions
  var accordions = document.getElementsByClassName( 'accordion-example__accordion-title' );
  //loop thorugh accordions
  for ( var i = 0; i < accordions.length; i++ ) {
      accordions[i].addEventListener('click', function() {
        //toggle class on click
        this.classList.toggle( 'accordion-example__accordion-title--active' );
        this.nextElementSibling.classList.toggle( 'accordion-example__accordion-panel--active' ); 
      });
  }

});
