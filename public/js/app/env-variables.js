/* SAAFIRE PROJECT
 * ================================================
 * SIMPLE WEBSITE FRAMEWORK, ENVIRONMENT VARIABLES
 * Jon C. Wretlind
 * Senior Developer
 * Beyond Blue Media LLC
 * ================================================
 * @version 0.1
 */
 // Version
  const $version = "0.1";
  console.log("===================================================");
  console.log("SaaFire Simple Website Framework, version: " + $version);
  console.log("===================================================");

  //Localize jQuery variable
  const $j = jQuery.noConflict();

  // is in Dev/Admin mode? get from /?dev=true in URL
  const isDev = getUrlVars()["dev"];
