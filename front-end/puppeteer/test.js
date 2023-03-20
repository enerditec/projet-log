const puppeteer = require("puppeteer");

const getAllUrl = async browser => {
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/')
  await page.waitForSelector('.product_pod a')
  const result = await page.evaluate(() =>
    [...document.querySelectorAll('article.product_pod a')].map(link => link.href),
  )
  return result
}

const getData = async (browser, url) => {
  const page = await browser.newPage()
  await page.goto(url)
  await page.waitForSelector('body')
  return page.evaluate(() => {
    const title = document.querySelector('h1').innerText
    const price = document.querySelector('.price_color').innerText
    return { title, price }
  })
}

const scrap = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const urls = await getAllUrl(browser);
  const data = await Promise.all(urls.map(url => getData(browser, url)));
  const uniqueData = [...new Set(data.map(item => item.title))].map(title => {
    return data.find(item => item.title === title)
  })
  await browser.close();
  return uniqueData;
};

// save data to csv file only with fs
const fs = require('fs');
const saveData = async () => {
  const data = await scrap();
  const header = 'title,price'
  const modifyTitle = data.map(item => item.title.replace(/,/g, ''))
  const csv = data.map((item, index) => `${modifyTitle[index]},${item.price}`).join('\n')
  fs.writeFile('data.csv', header + '\n' + csv, err => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

saveData();