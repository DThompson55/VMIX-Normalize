echo normalizing volume on %1
set REAPER_PATH=C:\"Program Files\REAPER (x64)"\Reaper
node helper.js %1 
start %REAPER_PATH% -batchconvert reaper-render-config.txt
pause 
type reaper-render-config.txt
type reaper-render-config.txt.log
pause