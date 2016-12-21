var makeMikeyDance = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
     //this.$node = $('<span class="mikey"></span>');
     this.$node.addClass("mikey");
};

makeMikeyDance.prototype = Object.create(makeDancer.prototype);
makeMikeyDance.prototype.constructor =  makeMikeyDance;

makeMikeyDance.prototype.step = function(){

 makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};
