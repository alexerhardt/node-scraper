const puppeteer = require('puppeteer');

const scrape = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {timeout: 0, waitUntil: "networkidle0"});
    const html = await page.content();
    browser.close();
    return html;
}

module.exports =  scrape;
