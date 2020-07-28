/**This test case will perform the following checks 
1. Login to HomePage.
2. Click on Sale Menu.
3. Apply a particular filter specified in the Constants File.
4. Verify it the filter has been correctly applied.
**/

const loginPage = require('../pages/loginpage')
const configData= require('../configuration/config');
const constants= require('../configuration/constants');
const FilterPage = require('../pages/FilterPage');

describe('Filter Items', function(){
	
	it('Navigates to Home Page and Verify its title' , function(){
		browser.url('./');
		browser.maximizeWindow()
		const title = loginPage.getPageTitle()
		console.log('login page Title is :', title);
		assert.equal(constants.LOGIN_PAGE_TITLE,title,'Title is not Found')
		FilterPage.NavigatetoSalePage()
	})

    it('Verify Sale Page is displayed' , function(){
		assert.isTrue(FilterPage.isSalePageDisplayed(),'Sale Page is not displayed')
		FilterPage.CLickPriceFilter()
		})
	
		it('Verify if Filter is Applied' , function(){
			assert.isTrue(FilterPage.VerifyFilterApplied(),'Filter is not applied')
		})
})
