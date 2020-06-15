# Nick's Custom Start Page

A custom and personal start page programed entirely in Node.js.

This requires some packages including Node.js in order to run.

## Installing

### Requirements

Node.JS: [12.\*](https://nodejs.org/en/download/)

#### Packages

* `body-parser@1.15.0`
* `cookie-parser@1.4.0`
* `debug@2.2.0`
* `express@4.14.0`
* `mathjs@6.2.3`
* `moment@2.24.0`
* `moment-holiday@1.5.1`
* `morgan@1.7.0`
* `promise@8.0.3`
* `pug@2.0.0-beta6`
* `request@2.88.0`
* `serve-favicon@2.3.0`
* `tinycolor2@1.4.1`

```powershell
cd $project_directory
npm install
```

**Note:** Node.js needs to be on your `PATH` environment variable. And replace `$project_directory` with the directory where the project is installed.

### Starting

**Windows**   
To start the program double click the batch file `run.bat`

**Linux**   
To start the program run `setup.sh` and fill out the required information.

#### Start on login

**Windows**   
If you want to make this program start on startup you can run `start-on-startup.bat` which will automatically register the program to start on startup.   
If the program is already registered on the registry it will instead remove it from the registry.

**Linux**   
Go to your system settings, and make sure your distribution has the ability to start the program on startup, and then register this program manually with the command:
`<path to the install folder>/run.sh`

## Copyright

MIT - Copyright &copy; 2020 Nick Mullally
