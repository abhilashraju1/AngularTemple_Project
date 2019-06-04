# Name: Abhilash Raju
# Date: 1st May'2019
# Project Name: Temple Project implementation

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Steps to Configure or Build AngularJs UI Temple Project
Please follow the below steps to set up / configure and build AngularJs UI Projects for Temple Application
Install the following software utilities 
NodeJs
Git 
Ruby

The above installers will add the following utilities in the path. Please verify by running the following in your windows command prompt or Git command prompt
npm --version
git --version (No problem if git is not present in the windows command prompt, you can use git bash or git cmd  to run the same)
ruby --version

Open a new Git command prompt OR Git bash terminal from start menu and run it as Administrator

Run the command npm install -g grunt grunt-cli
This will install grunt tool in the global folder %USERPROFILE%/AppData/Roaming/npm/node_modules/grunt and grunt-cli inside %USERPROFILE%/AppData/Roaming/npm/node_modules/grunt

Run the command npm install -g bower
This will install bower tool in the global folder %USERPROFILE%/AppData/Roaming/npm/node_modules/bower

Open a new Git Command Prompt OR Git bash terminal and check if grunt and bower are in the path by running the following commands 
grunt --version
bower --version

Note: If bower and grunt are command cannot be run, please check the %PATH% variable and ensure that %NODE_HOME% [%USERPROFILE%/AppData/Roaming/npm] is set in the path. You should have grunt.cmd and bower.cmd files in the same location (%NODE_HOME%)

Go to the UI project folder e.g. (\FutureDevelopment-Cimm2Touch-S\cimm2touch-s-webapp\assets). 

Run the command npm install
npm install will read the package.json file in the current directory and install all the dependencies mentioned.
these are npm tools which are used for different activities involved during the build e.g. wiring dependencies, sass compilation, minification, cdnification, uglification and others.

npm install grunt
grunt serve --force

# TO RUN THE APPLICATION
grunt clean serve --force

Steps: To include directive

1. bower install "directive name"
2. We will in clude js and css in index.html
3. We will add directive name in bower.json
4. We will include module in app.js
5. We need to inject in controller.


## Screen Shots


