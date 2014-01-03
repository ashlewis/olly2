define([], function() {

  var init = function(){

    if (!Modernizr.mq('only all')) {

        require([ 'vendor/respond.js']);
    }
  };

  return {'init' : init};
});