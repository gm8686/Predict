const url = "https://api-web.nhle.com/v1/player/8478402/landing";
const target = "https://api-web.nhle.com/v1/where-to-watch";
const { options } = require('./methods');

var trek;

fetch(target, options)
  .then( res => res.json() )
  .then( data => trek = data );

console.log(trek);