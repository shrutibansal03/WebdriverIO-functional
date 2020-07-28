/**
File name: loginpage.js
Description: This file contains selectors and functions which are used to test the login page.
**/

const elementUtil = require('../Util/elementUtil');
const constants= require('../configuration/constants');
class LoginPage{
	
//page actions
	
	getPageTitle(){
	return elementUtil.doGetPageTitle(constants.LOGIN_PAGE_TITLE)
	}

	isAccountLinkExists(){
		return elementUtil.doIsDisplayed(constants.accountlink)
	}
	
	NavigatetoLoginScreen(){
	elementUtil.doClick(constants.accountlink)
	elementUtil.doClick(constants.loginLink)
	}
	
	isLoginScreenExists(){
	return elementUtil.doIsDisplayed(constants.loginBtn)
	}
	
	doLogin(emailId,pawd){
		elementUtil.doSetValue(constants.username,emailId)
		elementUtil.doSetValue(constants.pwd,pawd)
		elementUtil.doClick(constants.loginBtn)
	}
	
	VerifyMsg(){
		return elementUtil.doIsDisplayed(constants.InvalidCredMsg)
	}
	
	VerifyRequiredFieldMsgEmail(){
		return elementUtil.doIsDisplayed(constants.RequiredMsgEmail)
	}

	VerifyRequiredFieldMsgPass(){
		return elementUtil.doIsDisplayed(constants.RequiredMsgPass)
	}
}

module.exports = new LoginPage()
