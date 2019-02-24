
var express = require("express");
var api = express.Router();
var friends = require("../data/friends");


api.get("/api/friends", function(req, res) {
  return res.json(friends);
    });
  
api.post("/api/friends", function(req, res) {

var newFriend = req.body;

friends.push(newFriend);
  
});


module.exports = api;