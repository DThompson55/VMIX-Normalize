if ( process.argv.length != 3){
  console.log( "node helper just strips spaces off the ends of the first parameter and ensures that it is wrapped in quotes" )
} else {
  var s = process.argv[2].trim();
  if ( s.charAt(0) != '"') s = '"'+s+'"';
  console.log(s)
}