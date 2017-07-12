$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    $('.switch').hover(function(event) {
    
      $(this).children().attr('src', 'http://static.tumblr.com/94bcbb49e3a55769de624972f77cd4e1/guhukug/oCHonphnc/tumblr_static_97469izt0r484wcokwgg8oc0g.gif');

    }, function(event) {
      $(this).children().attr('src', 'https://68.media.tumblr.com/0d29a110bbd89fface87d17f6dade085/tumblr_oof0gkLGUY1wnofxjo1_500.gif');
    });
    
  });


  


});

