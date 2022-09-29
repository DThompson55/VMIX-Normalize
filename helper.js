var ffmpeg = require('fluent-ffmpeg');
var encodings = require('./encodings.js');
const fs = require('fs');

//
// OK - this is a lot more complicated than it needs to be
// All it really does is make sure the filename is in the right format
// And then it builds a configuration file that REAPER will use to normalize the audio
//
// As a side effect it produces a 1920x1080 video file at 30 frames per second from whatever was delivered
// while keeping the original aspect ratio.
//
// All the complexity you see is for an experimental section that would, if it worked, have kept the original
// screen dimension
//
// I have two hardcoded paths to ffprobe, which is part of ffmpeg, which does the actual video conversion
// one for mac, one for windows. Pass your actual path to ffprobe as env vbl FFPATH
//

macffPath = "/opt/homebrew/bin/ffprobe";
winffPath = "C:\\Users\UUSE Team\Desktop\all things tech\ffmpeg-master-latest-win64-gpl-shared\ffmpeg-master-latest-win64-gpl-shared\bin\ffprob.exe";

var ffPath = (process.env["FFPATH"] || ((process.platform == "darwin")?macffPath:winffPath))

ffmpeg.setFfprobePath(ffPath);

if ( process.argv.length != 3){
  console.log( "node helper just strips spaces off the ends of the first parameter and ensures that it is wrapped in quotes" )
} else {
  var s = process.argv[2].trim();
  const fileOut = "reaper-render-config.txt";
  fs.writeFileSync(fileOut,s)
  fs.appendFileSync(fileOut,"\n<CONFIG\n OUTPATH .\n NORMALIZE 3 -14.0 0\n BRICKWALL 1 -2\n <OUTFMT\n    ");

  ffmpeg.ffprobe(s, function(err, metadata) {
      if (err) {
          console.error(err);
      } else {
          // metadata should contain 'width', 'height' and 'display_aspect_ratio'
          for (var i in metadata.streams){
            if (metadata.streams[i].width){
                var w = metadata.streams[i].width;
                var h = metadata.streams[i].height;
                var clock = metadata.streams[i].r_frame_rate;
                const split = clock.split("/");
                var rate = parseInt(split[0])/parseInt(split[1]);
                console.log('{"file": "'+s+'",\n "w":',w,', "h":',h,', "clock":"'+clock+'", "rate":',rate,',\n   "fmt_string":"TBD"},');
                if (process.env["FF_EXPERIEMENTAL"])
                  fs.appendFileSync(fileOut,encodings.get(w,h,rate,"ffmpeg"));//(process.platform == "darwin")?"MacOS":"ffmpeg"));
                else
                  fs.appendFileSync(fileOut,"UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAgAcAADgEAAAAAPBBAQAAAF8AAAAAAA==");
                fs.appendFileSync(fileOut,"\n >\n>\n")
            }
          }
      }
  });
}