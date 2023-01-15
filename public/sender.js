const peer = new Peer("sender", {
  host: "localhost",
  port: 5001,
  path: "/",
});

var conn = peer.connect("receiver");

// call
let getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;
getUserMedia(
  { video: true, audio: true },
  function (stream) {
    const call = peer.call("receiver", stream);
    console.log("call the receiver");
  },
  function (err) {
    console.log("Failed to get local stream", err);
  }
);
