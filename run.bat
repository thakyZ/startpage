@echo off
set npm_cmd=npm
start "" wscript.exe invis.vbs %npm_cmd% run start
