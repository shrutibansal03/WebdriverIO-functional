/**This test case will perform the following checks 
1. Login to HomePage and verify its titile.
2. Click on Account- Login and verify the Login Page Ttitle.
3. Check Required Field Validation on Username and Password Field.
**/

const loginPage = require('../pages/loginpage')
const configData= require('../configuration/config');
const constants= require('../configuration/constants');

describe('Login Page Required Fields Test', function(){
	
	it('verify login page title' , function(){
		browser.url('./');
		browser.maximizeWindow()
		const title = loginPage.getPageTitle()
		console.log('login page Title is :', title);
		assert.equal(constants.LOGIN_PAGE_TITLE,title,'Title is not Found')
		loginPage.NavigatetoLoginScreen()
	})

	it('verify Accounts Link Exists' , function(){
	assert.isTrue(loginPage.isAccountLinkExists(),'Account Link does not exists')
	})	
	

	it('verify Login Page is Displayed ' , function(){
	assert.isTrue(loginPage.isLoginScreenExists(),'Login Page does not exists')
	})	
	
	it('Do Login ' , function(){
	loginPage.doLogin("","")
	})

	it('verify Required Fields Message Email' , function(){
	assert.isTrue(loginPage.VerifyRequiredFieldMsgEmail(),'Required Field Message is not displayed for Email')
	})

	it('verify Required Fields Message Password' , function(){
	assert.isTrue(loginPage.VerifyRequiredFieldMsgPass(),'Required Field Message is not displayed for Email')
	})
})