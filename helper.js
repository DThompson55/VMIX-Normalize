const fs = require('fs');

  var s = process.argv[2].trim();
  const fileOut = "reaper-render-config.txt";
  fs.writeFileSync(fileOut,s)
  fs.appendFileSync(fileOut,'\n<CONFIG\n OUTPATH "C:/Users/UUSE Team/Desktop/this weeks service"\n NORMALIZE 3 -14.0 0\n BRICKWALL 1 -2\n <OUTFMT\n    ');
  fs.appendFileSync(fileOut,"UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAgAcAADgEAAAAAPBBAQAAAF8AAAAAAA==");
                           //UE1GRgMAAAACAAAAAAgAAAIAAACAAAAAgAcAADgEAAAAAPBBAQAAAF8AAAAAAA==  identical
  fs.appendFileSync(fileOut,"\n >\n>\n")
