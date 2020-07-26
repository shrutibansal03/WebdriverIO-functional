# WebdriverIO-functional
# Descrption of repository: Functional repository for web login, filter, cart verification and tests

To perform the tests, we will use WebdriverIO with Node.js.

Step 1: Install WebdriverIO

Before I get to installing WebdriverIO, you need to have a recent version NodeJS and be in an NPM package. If you want to have WebdriverIO integrated into your test suite, then install it locally with:

$ npm install webdriverio --save-dev

The test runner is called wdio and should be available after the install was successful:

$ ./node_modules/.bin/wdio --help

You can also install the package globally on your machine and use the wdio directly from the command line. However it is recommended to install it per project.

NPM package, you can quickly set one up by opening up a command prompt and running:

$ npm init -y

So long as you have those two things, you can install WebdriverIO by running the normal NPM command for such things:

$ npm i --save-dev webdriverio

Now, install the CLI:

$ npm i --save-dev @wdio/cli

Generate Configuration File

To do that, just run the configuration utility:

$ npx wdio config -y

The first time you run that command, it will check for a wdio.conf.js file.

Since we haven't created one yet, WebdriverIO is smart enough to figure that out and help us through the process. Here are the answers I chose:

Where do you want to execute your tests? On my local machine
Which framework do you want to use? mocha
Do you want to run WebdriverIO commands synchronous or asynchronous? Sync
Where are your test specs located? ./test/specs/**/*.js
Do you want WebdriverIO to autogenerate some test files? no
Are you using a compiler? no
Which reporter do you want to use? spec
Do you want to add a service to your test setup? chromedriver
What is the base url? http://www.ctqatest.biz/ecom/

Folder & File set up

$ mkdir .\test\specs

We told WebdriverIO that we've got our tests stored in the spec folder under test folder.
create a file called login.js and open it up in your noptepad++ or any editor of your choice.

Start the Testrunner. To do so, just run:

$ npx wdio wdio.conf.js

we'll set up the following:

describe('Login Page', function () {
  it('should let you log in', function () {
    // our tests will go here
  })
})

You do need both describe and it, as that's the hierarchy Mocha excepts. The it goes inside the describe block. Inside of the it block we'll put our tests.

We've got WebdriverIO configured and our test file laid out. Let's write our first test.

We're checking out a basic "happy path" scenario: The user enters in valid/invalid credentials for an account.

There are four unique steps to this test:

Go to the login page
Enter valid credentials
Click submit
Validate we're logged in
Let's go through these one at a time.

Going to the login page
The basic way to move to various pages in WebdriverIO is to use the url command. If you pass in text to it, WebdriverIO will tell the browser to that specific webpage.

You could pass in the entire URL of the page you want to test, but since we've already defined the domainwe're testing on (see config generation above), all we have to pass in is the path.

That looks like:
it('should let you log in', function () {
  browser.url('./');
})

Entering valid credentials
Now that we're on our login page with our login form, we need to enter our username/email and password.
########################################
The command we need to use for this is called 'setValue'. It works by accepting an element selector and a text value to insert in said element.
it('should let you log in', function () {
  browser.url('/');
  browser.setValue('input[name="email"]', 'valid@user.com');
  browser.setValue('input[name="password"]', 'hunter2');
})
For our element selectors, we use a combination of an HTML element and an HTML attribute. If you're not familiar with selecting elements in WebdriverIO, you're definitely going to want to read up on it.

Again, update your selectors and credentials with what's right for your site.

Clicking Submit
Okay, we've gone to the login page and have entered our credentials. Let's finish logging in.

There is a 'submitForm' command, but it's been deprecated, so we'll just go with clicking the 'Login' button.

We can 'click' and element by using the click command. That just makes sense, right?

All we need to do beyond calling the command is pass in a selector defining what element we want to click. This will trigger Webdriver to simulate a mouse left click in the center of that element.
it('should let you log in', function () {
  browser.url('/');
  browser.setValue('input[name="email"]', 'valid@user.com');
  browser.setValue('input[name="password"]', 'hunter2');
  browser.click('.button=Login');
})
Woah, what is that =login selector?! Turns out, you can select elements by the text those elements contain.

WebdriverIO is so cool.

Validating we're logged in
If all has gone well, we should be logged in now. But how do we really know?

If we were to run our test, the login page would quickly flash by, and we may miss visually verifying things worked out as planned.

Instead, we're going to use 'assertions' to check the status for us.

The simplest way I know to explain assertions is to say that:

You give the computer some unknown value (like a variable)
You give the computer a known value (like the number 9)
You tell the computer to validate the relationship between those two values. Examples:
The variable should equal 9
The variable should not equal 9
The variable should be bigger than 9
If the value of the variable is 8, only the second assertion will pass (8 does not equal 9).

Usually the variable is the result of some code function you want to test. Maybe you have a function that calculates the square of a number (called calcSquare).

Your assertions would be:
assert.equal(calcSquare(3), 9); // 9 == 9
assert.notEqual(calcSquare(2), 9); // 4 != 9
Both of those assertions will pass, assuming the calcSquare function is working correctly.

We can use assertions in many ways in WebdriverIO. For our current needs, we want to validate that the url of the page we're on is either:

not the same as the login url
the same as the url after logging in
The first is a more general test, and may result in a false positive (the test passes when it shouldn't) if the login takes you to a different page without logging you in (for example, a 'forgot your password' page).

The second option is a better one, but requires knowing the url of the page you get logged in to.

Thankfully, I know that URL for my example. But just in case, I'll show you both assertions.

First, we need to get the URL of the page we're now on (Webdriver is smart enough to wait for the page to reload after submitting the login form).

We get that url with the getUrl command.
it('should let you log in', function () {
  browser.url('/');
  browser.setValue('input[name="email"]', 'valid@user.com');
  browser.setValue('input[name="password"]', 'hunter2');
  browser.click('.button=Login');

  const pageUrl = browser.getUrl();
})
We don't pass any value in to the getUrl command. We simply assign the result of it to a pageUrl constant.

With it, we can now run our assertions:
it('should let you log in', function () {
  browser.url('/');
  browser.setValue('input[name="email"]', 'valid@user.com');
  browser.setValue('input[name="password"]', 'hunter2');
  browser.click('.button=Login');

  const pageUrl = browser.getUrl();
  assert.notEqual(pageUrl, 'http://testyourlog.in/example/');
  assert.equal(pageUrl, 'http://testyourlog.in/example/logged-in.html?email=valid%40user.com&password=hunter2');
})
I include both assertion types here, but you should really only need to include one.

Wait.

Where did this magical assert come from?

Nowhere, yet!

Yes, I neglected to mention the minor detail of loading Node's 'assert' library.

Thankfully that is pretty easy. Just shoot up to the top of your file and add:
const assert = require('assert');
Now you're ready to party.

Here's the full script just for easier reference:
const assert = require('assert');

describe('Login Page', function () {
  it('should let you log in', function () {
    browser.url('/');
    browser.setValue('input[name="email"]', 'valid@user.com');
    browser.setValue('input[name="password"]', 'hunter2');
    browser.click('.button=Login');

    const pageUrl = browser.getUrl();
    assert.notEqual(pageUrl, 'http://testyourlog.in/example/');
    assert.equal(pageUrl, 'http://testyourlog.in/example/logged-in.html?email=valid%40user.com&password=hunter2');
  });
});
Let's run our tests already!
We've got our test written and our assertions in place. Time to try it all out.

In a terminal window (or command prompt if you prefer to call it that), run your npx wdio command again.

If everything is set up correctly, you will see a Firefox browser momentarily pop up on your screen.

Hopefully your test completed and passed.

Console output of successful test passing
