$(document).ready(function() {
  var active = 'is-active';

  function callName() {
    var $btn = $('.call-btn'),
        string = 'Paul + Alex = learning something';

    $btn.click(function() {
      $(this).addClass(active);
      console.log(string);
    });
  }



  callName();
});
