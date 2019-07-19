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
  });