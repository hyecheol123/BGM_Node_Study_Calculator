/**
 * Main file to run Node Webserver
 *
 * @author Hyecheol (Jerry) Jang
 */

import http from 'http';
import fs from 'fs';
import url from 'url';

/**
 * handling HTTP requests depending on the request URL
 *
 * @param request HTTP request
 * @param response HTTP response
 */
function requestHandler(request, response) {
  // Parse path from request URL
  let path = url.parse(request.url).pathname;

  if(path === "/result") {
    // TODO: Case 1: Path is "result" - response with calculation result
  } else {
    if (path === "/") {
      // Case 2: Path is empty - response with web/calc.html
      path = "web/calc.html";
    } else {
      // Case 3: Others - response with requested file under web directory (If not exist, response with 404)
      path = "web" + path;
    }

    // read file
    fs.readFile(path, (err, data) => {
      if(err) { // Error occurred
        console.log(err);
        // Response with 404
        response.writeHead(404);
        response.write("404 NOT FOUND");
      } else { // File Exists
        // Response with file contents
        response.writeHead(200);
        response.write(data.toString());
      }

      // Send Response
      response.end();
    });
  }
}

http.createServer(requestHandler).listen(4000);
console.log("Node Webserver started: Port 4000");