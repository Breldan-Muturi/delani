$(document).ready(function() {
    $(".design-p, #design_icon").click(function() {
      $(".design-description").toggle('slow');
      $(".design").toggle('slow');
    });
    $(".dev-p, #dev_icon").click(function() {
        $(".dev-description").toggle('slow');
        $(".dev").toggle('slow');
    });
    $(".product-p,#product_icon").click(function() {
      $(".product-description").toggle('slow');
      $(".product").toggle('slow');
    });
    $("#work4").hover(function(){
        $(".work4").toggle('slow');
    });
    $("#work3").hover(function(){
      $(".work3").toggle('slow');
    });
    $("#work2").hover(function(){
      $(".work2").toggle('slow');
    });
    $("#work1").hover(function(){
      $(".work1").toggle('slow');
    });
    $("#work5").hover(function(){
      $(".work5").toggle('slow');
    });
    $("#work6").hover(function(){
      $(".work6").toggle('slow');
    });
    $("#work7").hover(function(){
      $(".work7").toggle('slow');
    });
    $("#work8").hover(function(){
      $(".work8").toggle('slow');
    });
    jQuery('form#contact-form').submit(function (event) {
      event.preventDefault();
      var userName = document.getElementById('name').value;
      alert(userName + ' we have received your message. Thank you for reaching out to us.');
      jQuery('#contact-form')[0].reset();
//        document.getElementById('contact-form').reset();
  })
});



  