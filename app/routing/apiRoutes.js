var express = require("express");
var api = express.Router();
var fs = require("fs");

var friends =[];

api.get("/api/friends", function(req, res) {
  console.log("apiroutes");
  return res.json(friends);
    });
  
api.post("/api/friends", function(req, res) {

var newFriend = req.body;

console.log("hello", newFriend);

friends.push(newFriend);

res.json(newFriend);
  
});

module.exports = api;