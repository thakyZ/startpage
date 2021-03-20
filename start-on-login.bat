@echo off

set SCRIPT="%TEMP%\%RANDOM%-%RANDOM%.vbs"

echo Set oWS = WScript.CreateObject("WScript.Shell") >> %SCRIPT%
echo sLinkFile = "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\startpage.lnk" >> %SCRIPT%
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> %SCRIPT%
echo oLink.TargetPath = "%~dp0\run.bat" >> %SCRIPT%
echo oLink.Save >> %SCRIPT%

cscript /nologo %SCRIPT%
del %SCRIPT%

echo Added startpage to run at startup.
echo The startup file is installed in "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\startpage.lnk"
echo You can still disable it in the Task Manager if you are on Windows 10
echo If you forget the location of the startpage it is stored in loc.txt in this folder.
echo %APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\startpage.lnk > loc.txt
pause