/* SAAFIRE PROJECT
 * ================================================
 * SIMPLE WEBSITE FRAMEWORK, MAIN CORE FUNCTIONS
 * Jon C. Wretlind
 * Senior Developer
 * Beyond Blue Media LLC
 * ================================================
 * @version 0.1
 */

// ---------------------------------
// SCRIPTS RUN ON DOCUMENT.READY
// ---------------------------------
$j(document).ready(function() {
    // globals
    var winWd = $j(window).width();

    // Check for dev/admin mode
    if (isDev) {
      console.log("DEVELOPMENT MODE");
      $j("body").addClass('dev');
    } else {
      // Return if NOT in DEV/ADMIN mode
      // BEFORE adding the admin panels
      // and interface elements.
      return;
    };


});// document.ready


$j(window).ready(function() {

      if ( ! $j("body").hasClass('dev') ) {
        // Return if NOT in DEV/ADMIN mode
        // BEFORE adding the admin panels
        // and interface elements.
        return;
      };


      // =================================
      // INIT APPLICATION
      // =================================


}); // window.ready
