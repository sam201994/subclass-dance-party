var makeMarioDance = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
     //this.$node = $('<span class="mario"></span>');
     this.$node.addClass("mario");
};

makeMarioDance.prototype = Object.create(makeDancer.prototype);
makeMarioDance.prototype.constructor =  makeMarioDance;

makeMarioDance.prototype.step = function(){

 makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};
