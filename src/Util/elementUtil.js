/**
File name: elementUtil.js
Description: This file contains genral functions which are used in various tests.
**/

const constants= require('../configuration/constants');

class ElementUtil{
	doClick(element) {
	element.waitForDisplayed()
	element.click()	
	}
	
	doSetValue(element,value){
	element.waitForDisplayed()
	element.setValue(value)
	}
	
	doGetText(element){
	element.waitForDisplayed()
	return element.getText()
	}
	
	doGetText(element){
	element.waitForDisplayed()
	return element.getText()
	}
	
	doIsDisplayed(element){
	element.waitForDisplayed()
	return element.isDisplayed()
	}
		
	doGetPageTitle(pageTitle){	
	browser.waitUntil(function(){
		return(browser.getTitle()===pageTitle)
	},10000,'Title is not Displayed after the given time' 
	)
	return browser.getTitle()
	}
	
	doSelectLabel(element, value) {
		element.waitForDisplayed()
		element.selectByAttribute('value',value)
	}
}
module.exports = new ElementUtil()