var friends = require("../data/friends.js");

module.exports = function(app){

  app.get("/api/friends",function(req,res){
    res.json(friends);
  });

  app.post("/api/friends",function(req,res){
    var results = req.body;
    var userScore = results.score;

    var bffName = 'blank';
    var bffPhoto = '';

    var difference = 60;

    friends.forEach(object => {
        //lowest possible score is 10 highest is 50, 60 can be outermax
  
        if (Math.abs(userScore - parseInt(object.score)) < difference){
          
          bffName = object.name;
          bffPhoto = object.photo;
  
          difference = Math.abs(userScore - parseInt(object.score));
        }
    });

    friends.push(results);

    res.json({status:200, bffName: bffName, bffPhoto: bffPhoto})

  });

//end module.exports
}
