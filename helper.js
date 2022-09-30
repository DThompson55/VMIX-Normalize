const fs = require('fs');

  var s = process.argv[2].trim();
  var outpath = "."
  if (process.argv[3])
    outpath = process.argv[3].trim();

  const fileOut = "reaper-render-config.txt";
  fs.writeFileSync(fileOut,s)
  fs.appendFileSync(fileOut,'\n<CONFIG\n OUTPATH '+outpath+'\n NORMALIZE 3 -14.0 0\n BRICKWALL 1 -2\n <OUTFMT\n    ');
  fs.appendFileSync(fileOut,"UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAgAcAADgEAAAAAPBBAQAAAF8AAAAAAA==");
                           //UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAgAcAADgEAAAAAPBBAQAAAF8AAAAAAA==  identical
  fs.appendFileSync(fileOut,"\n >\n>\n")
