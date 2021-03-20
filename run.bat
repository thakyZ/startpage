@echo off
set npm_cmd=npm
cd %~dp0
start "" wscript.exe invis.vbs %npm_cmd% run start
