const fs = require('fs');

  var s = process.argv[2].trim();
  var targetLUFS = "-14.0"
  if (process.argv[3])
    targetLUFS = process.argv[3].trim();

  var outpath = "."
  if (process.argv[4])
    outpath = process.argv[4].trim();


  const fileOut = "reaper-render-config.txt";
  fs.writeFileSync(fileOut,s)
  fs.appendFileSync(fileOut,'\n<CONFIG\n OUTPATH '+outpath+'\n NORMALIZE 3 '+targetLUFS+' 0\n BRICKWALL 1 -2\n <OUTFMT\n    ');
  fs.appendFileSync(fileOut,"UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAgAcAADgEAAAAAPBBAQAAAF8AAAAAAA==");
                           //UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAgAcAADgEAAAAAPBBAQAAAF8AAAAAAA==  identical
  fs.appendFileSync(fileOut,"\n >\n>\n")
