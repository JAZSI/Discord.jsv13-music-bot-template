@ECHO off
cls
:start
ECHO.
ECHO 1. Install Packages
ECHO 2. Start Bot
ECHO 3. Dev Mode
ECHO 4. Setup Token
set choice=
set /p choice=Type the number to start: 
if '%choice%'=='1' goto install
if '%choice%'=='2' goto startbot
if '%choice%'=='3' goto devmode
if '%choice%'=='4' goto setup
ECHO "%choice%" is not a valid option please try again.
ECHO.
goto start
:install
npm install
goto end
:startbot
npm run start
goto end
:devmode
npm run dev
goto end
:setup
set token=
set /p token=Please enter the token:   
ECHO Token set as: %token%
ECHO TOKEN=%token% > .env
:end
pause