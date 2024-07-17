import puppeteer from 'puppeteer';

async function getFlickr() {
    // let response = await fetch("https://www.flickr.com/photos/163735507@N06/");
    // let homepage = await response.text();
    // console.log(homepage);

    // Open a browser
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });

    // Open a new page
    const page = await browser.newPage();

    // Go to my flickr photostream and wait for it to load
    await page.goto("https://www.flickr.com/photos/163735507@N06/", {
        waitUntil: 'domcontentloaded',
    });

    // Scrape my photos
    const photostream = await page.evaluate(() => {
        const image_container = document.querySelector(".photo-list-photo-view");
        const image = image_container.querySelector("img").src;
        return image; 
    });

    // Place the photo in our page
    const img_container = document.querySelector("img");
    img_container.src = photostream;

    // Close the browser
    await browser.close();

}

// getFlickr();

