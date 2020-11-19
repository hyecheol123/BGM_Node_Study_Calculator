/**
 * Main file to run Node Webserver
 *
 * @author Hyecheol (Jerry) Jang
 */

import http from 'http';
import fs from 'fs';
import url from 'url';

const validCalc = /([^0-9\+\-\*\/\(\)])+/;

/**
 * handling HTTP requests depending on the request URL
 *
 * @param request HTTP request
 * @param response HTTP response
 */
function requestHandler(request, response) {
  // Parse path from request URL
  const requestURL = url.parse(request.url);
  let pathname = requestURL.pathname;

  if(pathname === "/result") {
    // Case 1: Path is "result" - response with calculation result
    const calcString = requestURL.query; // Parse calc string
    // Check for validity
    if(validCalc.test(calcString)) { // Containing Invalid Character
      response.writeHead(400);
      response.write('ERROR');
    } else { // Has No Error
      // Response with calculation result
      const result = new Function(`return ${calcString}`)();
      response.writeHead(200);
      response.write(result.toString());
    }
    response.end();
  } else {
    if (pathname === "/") {
      // Case 2: Path is empty - response with web/calc.html
      pathname = "web/calc.html";
    } else {
      // Case 3: Others - response with requested file under web directory (If not exist, response with 404)
      pathname = "web" + pathname;
    }

    // read file
    fs.readFile(pathname, (err, data) => {
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