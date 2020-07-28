/**
File name: FilterPage.js
Description: This file contains selectors and functions which are used for filetring purposes.
**/

const elementUtil = require('../Util/elementUtil');
const constants= require('../configuration/constants');
const { PRICE_SELECTOR } = require('../configuration/constants');
class FilterPage{
	
//page actions
	NavigatetoSalePage(){
		elementUtil.doClick(constants.saleLink)
		}
	isSalePageDisplayed(){
		return elementUtil.doIsDisplayed(constants.salePageHeader)
	}

	CLickPriceFilter(){
		elementUtil.doClick(constants.PriceFilterLink)
		}
	
	VerifyFilterApplied(){
		return elementUtil.doIsDisplayed(constants.appliedFilterText)
		}
	}
		module.exports = new FilterPage()
