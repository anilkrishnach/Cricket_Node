const req = require('request');
const algo = require('algorithms/data_structures');
const yargs=require('yargs')
const pid = require('./testsup.js');
var cmd = yargs.argv._;
if(cmd[0]=="stats")
{
  var player="";
  for(var i=1;i<cmd.length;i++)
    player=player+cmd[i]+" ";
  pid.getPID(player,(playerID)=>{
      var url=`http://cricapi.com/api/playerStats/1cLTDKHmLZZrg98LV6zwwIkcqda2?pid=${playerID}`;
      req({
        url:url,
        json: true
      }, (error,response,body) => {
        if(playerID!=0){
          var name=body.fullName;
          var country=body.country;
          var role=body.playingRole;
          var age=body.currentAge;
          var desc=body.profile;
          var bday=body.born;
          console.log(`\n\nFull Name: ${name}.\nCountry: ${country}\tRole: ${role}\nBirthday: ${bday}\tAge: ${age}\nAbout:${desc}`);
      }});
  });
}
