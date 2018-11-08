const $ = require('cheerio');
const scrape = require('./scrape');

const url = "https://www.extension.harvard.edu/course-catalog/courses/archive/2018";

/**
 * Grabs the courses from the Harvard Extension Archive and
 * prints key course data as a comma-separated value row
 */
(async () => {
    try {
        const html = await scrape(url);

        const container = $('.longlist-wrapper', html);
        container.children('div').each(function() {
            let csv = "";

            $('h1 > small', this).each(function() {
                csv +=  $(this).text() + ", ";
            });

            const spans = $('span', this);
            let sep;
            spans.each(function(i) {
                sep = i == spans.length - 1 ? "" : ", "
                csv +=  i + ": " + $(this).text() + sep;
            });

            console.log(csv);
        });
    }
    catch (err) {
        console.log(err);
    }
})();