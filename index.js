const url = "https://api-web.nhle.com/v1/player/8478402/landing";
const options = {
  headers: {
    Authorization: "Bearer 6Q************"
  }
};

fetch(url, options)
  .then( res => res.json() )
  .then( data => console.log(data) );