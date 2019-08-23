var socket = null

function setup() { //replace with expected ip 192.168.12.1
  if (!document.URL.includes("?")) {
    socket = io.connect("http://192.168.12.1:3000");
  }else {
    socket = io.connect("http://" + document.URL.split("?").pop());
  }

  socket.on('online', function(){
    document.getElementById("status").innerHTML = "status: connected"
  });

  createCanvas(0, 0)
  Viewsetup()
}

function requestVideo() {
  socket.emit('request', getRequest());
}

function getRequest() {
  return {
          id  : document.getElementById("videoIDInput").value,
          req : document.getElementById("usernameInput").value
         };
}
