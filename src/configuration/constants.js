const elementUtil = require('../Util/elementUtil');

module.exports = {
	
	LOGIN_PAGE_TITLE: 'Madison Island',
	SEARCH_ITEM:'SHIRT',
	ITEM_SPEC_DESC:'Slim fit Dobby Oxford Shirt',
	ITEM_SPEC_COLOR:'27',
	ITEM_SPEC_SIZE:'81',
	MENU: 'SALE',
	FILTER:'PRICE',
	PRICE_SELECTOR :'a[href="http://www.ctqatest.biz/ecom/sale.html?price=100-200"]',
	

//page locators - AddToCart.js
		get searchBox() {return $('input#search')},
		get searchclick() {return $('.search-button')},
		get specificItem() {return $('a=' + this.ITEM_SPEC_DESC)},
		get selectBox() {return $('#attribute92')},
		get colorDropdown() {return $('#attribute180')},
		get AddtoCartBtn() {return $$('.btn-cart')[1]},
		get ItemAddedMessage() {return $$('.success-msg ul li')[0]},

//page locators - FilterPage.js
	
	get username() {return $('input[type=email]')},
	get pwd() {return $('input[type=password]')},
	get loginBtn() {return $("button[title='Login']")},
	get accountlink(){return $('header#header div.skip-links > div > a > span.icon')},
	get loginLink(){return $('div#header-account li.last > a')},
	get saleLink() {return $$('a[href="http://www.ctqatest.biz/ecom/sale.html"]')[0]},
	get PriceFilterLink() {return $(this.PRICE_SELECTOR)},
	get appliedFilterText() {return $$('.value*=$100')[0]},
	get salePageHeader() {return $('html#top h1')},

//page locators - Loginpage.js

	get username() {return $('input[type=email]')},
	get pwd() {return $('input[type=password]')},
	get loginBtn() {return $("button[title='Login']")},
	get accountlink(){return $('a[href="http://www.ctqatest.biz/ecom/customer/account/"]')},
	get loginLink(){return $('a[href="http://www.ctqatest.biz/ecom/customer/account/login/"]')},
	get InvalidCredMsg() {return $('.error-msg')},
	get RequiredMsgEmail() {return $("#advice-required-entry-email")},
	get RequiredMsgPass() {return $("#advice-required-entry-pass")}

}
