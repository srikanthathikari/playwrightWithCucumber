const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require("@playwright/test");

const url = 'https://playwright.dev/';

//define selectors
const getStarted = '//*[@id="__docusaurus"]/div[3]/header/div/div/a'
const writingTestsLink = '//*[@id="__docusaurus"]/div[2]/div/aside/div/nav/ul/li[1]/ul/li[2]/a';

Given('land on the playwright home page', async () => {
    await page.goto(url)
})
When('click on the get started button', async () => {
    await page.locator(getStarted).click();
    await page.locator(writingTestsLink).click();
})