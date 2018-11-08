const $ = require('cheerio');
const scrape = require('./scrape');

const url = "https://www.extension.harvard.edu/course-catalog/courses/archive/2018";

(async () => {
    try {
        const html = await scrape(url);

        console.log("html: " + html);
        $('small', html).each( function() {
            console.log($(this).text());
        });
    }
    catch (err) {
        console.log(err);
    }
})();