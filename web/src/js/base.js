var socket = null

function setup() {
  if (!document.URL.includes("?")) {
    socket = io.connect("http://192.168.12.1:3000"); //replace with expected ip
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
  createError("Requested video: " + document.getElementById("videoIDInput").value, "success");
  document.getElementById("videoIDInput").value = "";
}

function createError(error, state) {
  document.getElementById("errorlist").innerHTML = "<p class=" + state + ">" + error + "</p>" + document.getElementById("errorlist").innerHTML
}

function getRequest() {
  return {
          id  : document.getElementById("videoIDInput").value,
          req : document.getElementById("usernameInput").value
         };
}
