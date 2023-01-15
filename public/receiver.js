const peer = new Peer("receiver", {
  host: "localhost",
  port: 5001,
  path: "/",
});

let video = document.getElementById("video");
let getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

peer.on("call", function (call) {
  console.log("receive the call from sender");
  getUserMedia(
    { video: true, audio: false },
    function (stream) {
      const tracks = stream.getTracks();
      console.log(tracks);
      tracks[0].stop();
      call.answer(stream);
      console.log("call the receiver");

      call.on("stream", function (remoteStream) {
        console.log(remoteStream);
        video.srcObject = remoteStream;

        // `stream` is the MediaStream of the remote peer.
        // Here you'd add it to an HTML video/canvas element.
      });
    },
    function (err) {
      console.log("Failed to get local stream", err);
    }
  );
});
