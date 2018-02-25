const req = require('request');
const algo = require('algorithms/data_structures');
const yargs=require('yargs')
var url="http://cricapi.com/api/playerFinder/1cLTDKHmLZZrg98LV6zwwIkcqda2?name=";
var pidret = (name,callback) => {
  url=url+encodeURIComponent(name);
  req({
   url: url,
   json: true
 }, (err, response, body) =>{
   if(body.data.length==1){
   var pid= JSON.stringify(body.data[0].pid);
   callback(pid);
 }
 else {
   console.log("More than 1 player with the name. Request again with the correct one from below.");
   for(i in body.data)
   {
     console.log(body.data[i].fullName);
   }
   callback(0);
 }
});
}

module.exports= {
  getPID:pidret
}
