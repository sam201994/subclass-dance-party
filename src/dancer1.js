var makeColorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
 
};

makeColorDancer.prototype = Object.create(makeDancer.prototype);
makeColorDancer.prototype.constructor =  makeColorDancer;

makeColorDancer.prototype.step = function() {

 makeDancer.prototype.step.call(this);
  //this.$node.fadeTo(1000, 0.4);
 // this.$node.effect( "bounce", {times:3}, 300 );
 // this.$node.animate({maxWidth: "+=100px"},1000);
 
var intDuration = 200; //time in ms
var obj=this;
setInterval(
   function(){
        obj.$node.animate({"width": "-=100px", "height": "-=100px", "color": "blue"},'slow').delay(10)
           .animate({"width": "+=100px","height": "+=100px"},'slow');
   }, 
   intDuration
);
};
