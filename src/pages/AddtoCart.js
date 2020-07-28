/**
File name: AddtoCart.js
Description: This file contains AddtoCart page selectors and functions.
**/

const elementUtil = require('../Util/elementUtil');
const constants= require('../configuration/constants');
class AddtoCart{

//page actions :
doSearch(SearchItem){
    elementUtil.doSetValue(constants.searchBox,SearchItem)
    elementUtil.doClick(constants.searchclick)
    }

doClickItem(ItemDescription){
            elementUtil.doClick(constants.specificItem)
    }    
 
doClickAddtoCart(){
        elementUtil.doClick(constants.AddtoCartBtn)
    }
VerifySuccessdMsg(){
		return elementUtil.doIsDisplayed(constants.ItemAddedMessage)
	} 
}
module.exports = new AddtoCart()