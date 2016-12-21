var fadeIn = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
};

fadeIn.prototype = Object.create(makeDancer.prototype);
fadeIn.prototype.constructor =  fadeIn;

fadeIn.prototype.step = function(){

makeDancer.prototype.step.call(this);

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
