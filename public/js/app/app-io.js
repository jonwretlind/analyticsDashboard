/* SAAFIRE PROJECT
 * ==================================================
 * SIMPLE WEBSITE FRAMEWORK, ENCAP. SOCKET.IO
 * INTEGRATION FOR SERVER TO COMMUNICATE WITH CLIENT
 * Jon C. Wretlind
 * Senior Developer
 * Beyond Blue Media LLC
 * ==================================================
 * @version 0.1
 */

try {
  define(['socketio'], function (Io) {
    var socket = Io.connect('http://localhost:3000');
  });
 } catch(e) {
   console.log(e);
 };
