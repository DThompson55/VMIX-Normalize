export REAPER_PATH=/Applications/REAPER.app/Contents/MacOS/REAPER
node ./helper.js "$1" 
$REAPER_PATH -batchconvert reaper-render-config.txt
cat reaper-render-config.txt
cat reaper-render-config.txt.log