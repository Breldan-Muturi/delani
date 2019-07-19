$(document).ready(function() {
    $("h3, #design_icon").click(function() {
      $(".design-description").toggle('slow');
      $(".design").toggle('slow');
    });
    $("h3, #dev_icon").click(function() {
        $(".dev-description").toggle('slow');
        $(".dev").toggle('slow');
    });
    $("h3,#product_icon").click(function() {
      $(".product-description").toggle('slow');
      $(".product").toggle('slow');
    });
  });