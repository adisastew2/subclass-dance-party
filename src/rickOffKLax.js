var rickSanchez = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer switch"> <img class="rick" src= "https://68.media.tumblr.com/0d29a110bbd89fface87d17f6dade085/tumblr_oof0gkLGUY1wnofxjo1_500.gif"> </img> </span>');
  this.step();
  this.setPosition(top, left);

};

rickSanchez.prototype = Object.create(makeDancer.prototype);
rickSanchez.prototype.constructor = rickSanchez;

rickSanchez.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
     
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  
  // this.$node.toggle();
};