#!/usr/bin/env bash

currentDir="$(dirname "${BASH_SOURCE[0]}")"
packagelock="${currentDir}/package-lock.json"
npm="$(which npm)"

RED="\e[91m"
RESET="\e[39m"

installPackages()
{
  cd "$currentDir" || return 1
  eval "$($npm install)" && return 0
}

startProgram()
{
  cd "$currentDir" || return 1
  eval "$($npm run start)" && return 0
}

pause()
{
  read -r -p "$*"
}

if [ ! -f "${packagelock}" ]; then
  if installPackages; then
    echo -e "${RED}ERROR: ${RESET}Could not install npm packages"
  fi
fi

if startProgram; then
  echo -e "${RED}ERROR: ${RESET}Could not start the program."
fi

pause "Press [Enter] key to continue..."
exit
