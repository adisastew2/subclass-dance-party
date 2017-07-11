var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    
  
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};