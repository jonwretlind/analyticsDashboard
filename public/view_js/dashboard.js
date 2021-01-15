// CUSTOM CODE FOR BLACKMOUNTAIN VIEW

$j(document).ready(function() {
    console.log("FRAMEWORK JQUERY FUNCTIONS LOADED");
    var bp = 980; //mobile breakpoint

    // mobil-ize
    var winWd = $j(window).width();
    if ( winWd <= bp ) {
      $j('body').addClass('mobile');
      $j('#MainMenu ul.nav').prepend('<i class="fas fa-bars"></i>');
    };

    $j(window).on("resize", function() {
      var winWd = $j(window).width();
      if ( winWd <= bp )  {
        $j('body').addClass('mobile');
        if ( ! $j('i.fas').hasClass('resize') ) {
          $j('#MainMenu ul.nav').prepend('<i class="fas fa-bars resize"></i>');
        }
      } else {
        $j('body').removeClass('mobile');
        $j('#MainMenu ul.nav i.fa-bars').remove();
      };
    });

    $j('ul.nav i.fas').on("click", function() {
      $j('i.fas').toggleClass(function() {
        if ( $j(this).hasClass('fa-bars') ) {
          return "fa-times";
        } else {
          return "fa-bars";
        }
      });
      $j('ul.nav li').slideToggle();
    })

}); // document.ready
