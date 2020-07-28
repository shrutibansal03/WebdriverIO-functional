# WebdriverIO-functional
Descrption of repository: Functional repository for web login, filter, cart verification and tests

To perform the tests, we will use WebdriverIO with Node.js.

Step 1: Install WebdriverIO

Before I get to installing WebdriverIO, you need to have a recent version NodeJS and be in an NPM package. If you want to have WebdriverIO integrated into your test suite, then install it locally with:

`$ npm install webdriverio --save-dev`

The test runner is called wdio and should be available after the install was successful:

`$ ./node_modules/.bin/wdio --help`

You can also install the package globally on your machine and use the wdio directly from the command line. However it is recommended to install it per project.
NPM package, you can quickly set one up by opening up a command prompt and running:

`$ npm init -y`

So long as you have those two things, you can install WebdriverIO by running the normal NPM command for such things:

`$ npm i --save-dev webdriverio`

Now, install the CLI:

`$ npm i --save-dev @wdio/cli`

Generate Configuration File
To do that, just run the configuration utility:

`$ npx wdio config -y`

The first time you run that command, it will check for a wdio.conf.js file.
Since we haven't created one yet, WebdriverIO is smart enough to figure that out and help us through the process. Here are the answers I chose:
```
Where do you want to execute your tests? On my local machine
Which framework do you want to use? mocha
Do you want to run WebdriverIO commands synchronous or asynchronous? Sync
Where are your test specs located? ./src/stories/**/*.js
Do you want WebdriverIO to autogenerate some test files? no
Are you using a compiler? no
Which reporter do you want to use? spec
Do you want to add a service to your test setup? chromedriver
What is the base url? http://www.ctqatest.biz/ecom/
```
Edit the `wdio.conf.js` and enter the following for chai assertions
```
beforeTest: function() {
		
		const chai = require('chai')
		const chaiWebdriver = require('chai-webdriverio').default
		chai.use(chaiWebdriver(browser))
		
		global.assert = chai.assert
		global.should = chai.should
		global.expect = chai.exp
		
	},
  ```
Folder & File set up

`$ mkdir ./src/stories/**/*.js`

We told WebdriverIO that we've got our tests stored in the spec folder.

For editor, We have used # code Visualbasic tool

command we use for running the test codes under stories folder:

`$ npx wdio wdio.conf.js`

# Project Folder structure
```
src
  configuration
  pages
  stories
  util
```
where:

**src** : Source folder

**configuration** : contains config file and all the selectors used in this project in various test stories
**pages** : all the functions used in this project in various test stories
**stories** : all the functional tests.
**util** : contains all the general functions.

**What to expect**

filter.js
```
This test case will perform the following checks 
1. Login to HomePage and verify its titile.
2. Click on Account- Login and verify the Login Page Ttitle.
3. Check Invalid Credentials on Username and Password Field.
```
login.test_InvalidCredentials.js
```
This test case will perform the following checks 
1. Login to HomePage and verify its titile.
2. Click on Account- Login and verify the Login Page Ttitle.
3. Check Invalid Credentials on Username and Password Field.
```
login.test_RequiredFields.js
```
This test case will perform the following checks 
1. Login to HomePage and verify its titile.
2. Click on Account- Login and verify the Login Page Ttitle.
3. Check Required Field Validation on Username and Password Field.
```
Search&AddtoCart.js
```
1. Login to HomePage.
2. Search for a item based on specifications add to Cart.
The specifications are listed in the Constants file
-- SearchText : Shirt
-- Item Specification : SLIM FIT DOBBY OXFORD SHIRT
-- Size : XL
-- Color : Blue
3. The test case will verify all the fields are available on the Screen.
```

All the above test stories are tested and outputs are also attached as screenshots in the output.docx file.
