echo normalizing volume on %1
set REAPER_PATH=C:\"Program Files\REAPER (x64)"\Reaper
node helper.js %1 %2 %3
start %REAPER_PATH% -batchconvert reaper-render-config.txt
rem pause 
rem type reaper-render-config.txt
rem type reaper-render-config.txt.log
rem pause
