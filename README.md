# -XHR--XMLHttprequest-NodeJs

* A look into how XHR request works using Node.JS

## Summary

Everytime the ** server restarted: **  a new 'Zen' quote is shown in the browser.

* API courstey of: https://api.github.com/zen

### First...

When using this it is important to make sure you use an added dependency: 

    npm i xmlhttprequest

### Usage: 

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();

    see... npm docs: https://www.npmjs.com/package/xmlhttprequest