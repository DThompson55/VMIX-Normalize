const testFolder = '.';
const fs = require('fs');

const propFile = 'normalize-properties.txt'; 
const renderProp = process.env["RENDER_PROPS"];
const props = "<CONFIG\n OUTPATH .\n NORMALIZE 3 -14.0 0\n BRICKWALL 1 -2\n<OUTFMT\n  "+renderProp+"\n >\n>";

fs.readdir(testFolder, (err, files) => {
  var found = false;
    files.forEach(file => {
      if ((file.toLowerCase()).includes(".mp4") || (file.toLowerCase()).includes(".mov")){
        if (!(file.toLowerCase()).includes("-converted")) {
          if (!found){
            fs.writeFileSync(propFile, file+"\n" )
          } else {
            fs.appendFileSync(propFile, file+"\n" )
          }
         found = true;
        }
      }
    })
    if ( found ){
          fs.appendFileSync(propFile, props)
    }
});
