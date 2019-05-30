var http = require ('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

fs.readFile('index.html', function(err, html){
    if(err){
        throw err;
    }
    var server = http.createServer(function(req, res){
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end(XHR.responseText);
    });
    server.listen(port, hostname, function(res, req){
    console.log("Server started...again on " + port);
});
});


          
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var XHR = new XMLHttpRequest();

  
XHR.onreadystatechange = function() {
        console.log("READY STATE IS ..." + XHR.readyState);
        if(XHR.readyState === 4) {
            if(XHR.status == 200) {
                console.log(XHR.responseText);
            } else {
                console.log("There was a problem!");
            } 
        }
    }
XHR.open("GET", "https://api.github.com/zen");
XHR.send();



// -------------------in browser console -------------------------------



// var XHR = new XMLHttpRequest();

// XHR.onreadystatechange = function() {
//     //console.log("READY STATE IS ..." + XHR.readyState);
//     if(XHR.readyState === 4) {
//         if(XHR.status == 200) {
//             console.log(XHR.responseText);
//         } else {
//             console.log("There was a problem!");
//         } 
//     }
// }
// XHR.open("GET", "https://api.github.com/zen");
// XHR.send();


// -----------------------------------------------------------

