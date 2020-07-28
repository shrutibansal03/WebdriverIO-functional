/**This test case will perform the following checks 
1. Login to HomePage.
2. Search for a item based on specifications add to Cart.
The specifications are listed in the Constants file
-- SearchText : Shirt
-- Item Specification : SLIM FIT DOBBY OXFORD SHIRT
-- Size : XL
-- Color : Blue
3. The test case will verify all the fields are available on the Screen.
**/

const loginPage = require('../pages/loginpage')
const configData = require('../configuration/config');
const constants = require('../configuration/constants');
const AddtoCart = require('../pages/AddtoCart.js');
const elementUtil = require('../Util/elementUtil');
const { assert, expect } = require('chai');

describe("Searching Item and add to cart", function(){

    it("enter search value", function(){
        browser.url('./');
        browser.maximizeWindow()
        AddtoCart.doSearch(constants.SEARCH_ITEM)
       
    })
    
    it("Clicks on the Specified Item from Constants",function(){
        AddtoCart.doClickItem(constants.ITEM_SPEC_DESC)
    })

    it("Selects Color and Size from Constants",function(){
        elementUtil.doSelectLabel(constants.selectBox,constants.ITEM_SPEC_COLOR)
        elementUtil.doSelectLabel(constants.colorDropdown,constants.ITEM_SPEC_SIZE)
        browser.pause(5000)
    })

    it("Clicks on the Add to Cart Button",function(){
        AddtoCart.doClickAddtoCart()
     }) 

     it("Verifies the Success Message",function(){
        assert.isTrue(AddtoCart.VerifySuccessdMsg(), 'failed to add in shopping cart');
        }) 
        
})