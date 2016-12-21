$(document).ready(function() {
  window.dancers = [];
  window.marioDancers=[];
  window.bunnyDancers=[];
  window.mikeyDancers=[];

  //play music on load
  
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'images/Dice MediaSong For Survival ft. Mithila PalkarLittle Things Soundtrack.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    $.get();
    audioElement.addEventListener("load", function() {
      audioElement.play();
    }, true);

    $('.play').click(function() {
      audioElement.play();
    });

    $('.pause').click(function() {
      audioElement.pause();
    });
//--------------------


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

   
    if(dancerMakerFunctionName==='makeBlinkyDancer'){
    var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        3000
      );

    }
    else{
      var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      500
    );
  
    window.dancers.push(dancer);
  }
   
  $('body').append(dancer.$node);
  });



  $('.lineUpButton').on('click', function(){
    for (var i=0; i<window.dancers.length; i++){
      var allDancers = window.dancers[i];
      var k=(i*90)+100;
      allDancers.setPosition(400,k);
    }
  });


  $('.interact').on('click', function() {
  for (var i = 0; i < window.dancers.length; i++){
      var allDancers = window.dancers[i];
      var left = allDancers.left;
      var top = allDancers.top;
     allDancers.setPosition(top+1, left+1);
    }

  });


});

