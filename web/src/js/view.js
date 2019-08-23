var canvasMarMin = 0
var canvasMarMax = 100
var canvasMar = 100
var canvasPadMin = 1
var canvasPadMax = 25
var canvasPad = 25
var canvasItem = null

var transitioning = false
var towards = "open"
var ytPlayer = null

function Viewsetup() {
  ytPlayer = document.getElementById('player')
  canvasItem = document.getElementById('canvasItem')
  ytPlayer.height = windowHeight
  socket.on('showpanel', function(){
    setPanelState("open");
    setTimeout(function(){ setPanelState("closed"); }, 7000);
  });
  socket.on('getcurrent', function(id){
    player.loadVideoById(id.id);
    document.getElementById("reqstatus").innerHTML = "requested by: " + id.req;
  });

  socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
  });

  setTimeout(function(){ setPanelState("closed"); }, 3000);
}

function setPanelState(state) {
  towards = state;
  transitioning = true;
  doloop();
}

function doloop(){
  if (transitioning) {
    var done = 0
    if (towards == "open") {
      if (canvasPad < canvasPadMax) {
        canvasPad++;
      }else {
        done++;
        if (canvasMar < canvasMarMax) {
          canvasMar++;
        }else {
          done++;
        }
      }
    }
    if (towards == "closed") {
      if (canvasMar > canvasMarMin) {
        canvasMar--;
      }else {
        done++;
        if (canvasPad > canvasPadMin) {
          canvasPad--;
        }else {
          done++;
        }
      }
    }
    if (done == 2) {
      transitioning = false;
    }
    canvasItem.style.padding = canvasPad + "px 25px";
    canvasItem.style.maxHeight = (canvasMar * 2) + "px";
    setTimeout(function(){ doloop(); }, 10);
  }
}

function playerIsReady() {
  socket.emit('view-getcurrent');
}
