var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);



};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
     
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
    
  this.$node.toggle();
};