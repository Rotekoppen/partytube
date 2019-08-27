var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var fs = require("fs");

var configFile = fs.readFileSync("config.json");
var config = JSON.parse(configFile);

var queue = [];   // 1 Vid ID, 2 Requester
var history = [];

var playing = true;
if (config.ShowPanelInterval != 0) {
  setInterval(function() {
    console.log("showing panel, as i do every " + config.ShowPanelInterval + " minutes");
    io.emit("showpanel")
  }, config.ShowPanelInterval * 60 * 1000);
}

app.use(express.static('web'))

function playVideo() {
  if (queue.length == 0) {
    playing = false;
  }else {
    playing = true;
    io.emit("getcurrent", queue[0]);
  }
}

io.on('connection', function(socket){
  console.log('someone connected');
  io.emit("online");

  socket.on("checkonline", function(){
    console.log("checkonline");
    io.emit("online");
  });

  socket.on('request', function(req){
    console.log('request: ' + req.id + " from " + req.req);
    queue.push(req);
    if (queue.length == 1) {
      playVideo()
    }
  });

  socket.on('view-getcurrent', function(req){
    console.log('giving current');
    playVideo()
  });

  socket.on('view-end', function(req){
    console.log('video is over');
    history.push(queue.shift())
    playVideo()
  });

  socket.on('admin-skip', function(req){
    console.log('skipping video');
    history.push(queue.shift())
    playVideo()
  });

  socket.on('admin-showpanel', function(req){
    console.log('showing panel');
    io.emit("showpanel")
  });

  socket.on('admin-resetsize', function(req){
    console.log('reset size');
    io.emit("resetsize")
  });

  socket.on("sync-players", function(req){
    console.log("syncing players");
    io.emit("get-time");
  });

  socket.on("sync-players", function(time, id){
    console.log("syncing players");
    io.emit("sync-with-time", time, id);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(config.port, function(){
  console.log('PartyTube running on port ' + config.port);
});
