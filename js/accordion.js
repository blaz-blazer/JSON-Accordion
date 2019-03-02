//set to false if your domain is trused origin on the server where the json file is
var proxy = true;
var url;

if ( proxy === true) {
  //we use an api
  url = 'https://cors-anywhere.herokuapp.com/http://dev-test.grafikrdev.dk/frontend/accordion-data.json';
} else { //we access directly
  url = 'http://dev-test.grafikrdev.dk/frontend/accordion-data.json';
}

//wait till it loads
window.addEventListener("load", function(event) {
  //initialize accoridon
  getJson( url, getJsonCallback );
});

//FUNCTIONS

//function to get data from json
function getJson( url, callback ) {
  var request = new XMLHttpRequest();
  //request is async - hence the callback
  request.open( 'GET', url, true );
  request.setRequestHeader( 'Content-Type', 'application/json' );
  request.responseType = 'json';
  request.onreadystatechange = function() {
    if ( this.readyState == 4 && this.status == 200 ) {
      callback ( this.response.blocks );
    }
  };
  request.send();
}

//callback function for get data from json
function getJsonCallback( data ) {
  for ( var i = 0; i < data.length; i++ ) {
    //organize the data
    var heading = data[i].heading;
    //content needs further attention
    var content = '';
    if ( typeof data[i].content !== 'undefined' ) {
      //use content from json
      content += data[i].content;
    } else if ( typeof data[i].items !== 'undefined' ) {
      content += data[i].items.join('<br />');
    }

    //we'll be injecting into this div
    var container = document.getElementById( 'accordion-container' );
    //populate the container div
    container.insertAdjacentHTML( 'beforeend', '<div class="accordion-example__accordion-title">' + heading + '</div>' + '<div class="accordion-example__accordion-panel"><p>' + content + '</p></div>' );
  }
  //call interactivate accordions
  interactivateAccordions();
}

//make accordion interactive
function interactivateAccordions() {
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
}
