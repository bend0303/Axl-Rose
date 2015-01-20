"use strict";

var cheerio = require('cheerio');
var S = require('string');


function sport5ContentParser(parser) {
    var retval = {
        img: []
    };
    retval.title = parser('.article-main').text().trim(); // event's title
    retval.description = parser('.article-sub-main').text().trim(); // event's sub-header
    retval.author = parser('#ContentPlaceHolder1_ancWriter').text().trim();
    var images = parser('.main-block img'); // event's image source
    for (var index = 0; index < images.length; index++) {
        var image = images[index].attribs.src;
        if (S(image).contains('http://')) {
            retval.img.push(images[index].attribs.src);
        }
    }
    return retval;
}
function nana10ContentParser(parser) {
    var retval = {
        img: []
    };
    retval.title = parser('#ArtTitle').text().trim(); // event's title
    retval.description = parser('.ParagraphTitle').text().trim(); // event's sub-header
    retval.author = parser('.AuthorEmail').text().trim();
    var images = parser('.MainTable img'); // event's image source
    for (var index = 0; index < images.length; index++) {
        var image = images[index].attribs.src;
        if (S(image).contains('http://')) {
            retval.img.push(image);
        }
    }
    return retval;
}
function themarkerContentParser(parser) {
    var retval = {
        img: []
    };
    retval.title = parser('.mainTitle').text().trim(); // event's title
    retval.description = parser('.subtitle').text().trim(); // event's sub-header
    retval.author = parser('.author-bar strong span').text().trim();
    var images = parser('.inArticleHoldImage img'); // event's image source
    for (var index = 0; index < images.length; index++) {
        var image = images[index].attribs.src;
        image = 'http://www.themarker.com' + image;
        retval.img.push(image);
    }
    return retval;
}
function maarivContentParser(parser) {
    var retval = {
        img: []
    };
    retval.title = parser('.article-title').text().trim(); // event's title
    retval.description = parser('.article-teaser-text').text().trim(); // event's sub-header
    retval.author = parser('.article-author a').text().trim();
    var images = parser('.article-inner-content-bg-wrap img'); // event's image source
    for (var index = 0; index < images.length; index++) {
        var image = images[index].attribs.src;
        if (S(image).contains('http://')) {
            retval.img.push(images[index].attribs.src);
        }
    }
    return retval;
}
function nrgContentParser(parser) {
    var retval = {
        img: []
    };
    retval.title = parser('#article h1').text().trim(); // event's title
    retval.description = parser('#article h2').text().trim(); // event's sub-header
    var author = parser('#articleCBar .cdat').text().trim();
    author = author.split('|')[0];
    retval.author = author;
    var images = parser('#article img'); // event's image source
    for (var index = 0; index < images.length; index++) {
        var image = images[index].attribs.src;
        if (S(image).contains('archive')) {
            image = 'http://www.nrg.co.il' + image;
            retval.img.push(image);
        }
    }
    return retval;
}


function oneContentParser(parser) {
    var retval = {
        img: []
    };
    retval.title = parser('#_ctl0_Main_ucFullArticle_lblCaption').text().trim(); // event's title
    retval.description = parser('#_ctl0_Main_ucFullArticle_lblAbstract').text().trim(); // event's sub-header
    retval.author = parser('#tdCredit').text().trim().replace('מאת', '');
    var images = parser('.MainContent img'); // event's image source
    for (var index = 0; index < images.length; index++) {
        var image = images[index].attribs.src;
        if (S(image).contains('http://')) {
            retval.img.push(images[index].attribs.src);
        }
    }
    return retval;
}

function israelhayomContentParser(parser) {
    var retval = {
        img: []
    }
    retval.title = parser('.pane-title').text(); // event's title
    retval.description = parser('.content .field-item').first().text(); // event's sub-header
    retval.author = parser('.content li[class*=taxonomy-term-reference]').text().trim();
    var images = parser('.content img'); // event's image source
    for (var index = 0; index < images.length; index++) {
        var image = images[index].attribs.src;
        if (S(image).contains('http://')) {
            retval.img.push(images[index].attribs.src);
        }
    }
    return retval;

}
function haaretzContentParser(parser) {
    var retval = {
        img: []
    }

    retval.title = parser('header h1').text(); // event's title
    retval.description = parser('header p').text(); // event's sub-header
    retval.author = parser('header address a').text().trim();
    var images = parser('article img'); // event's image source
    for (var index = 0; index < images.length; index++) {
        if (images[index].attribs.srcset) {
            var image = images[index].attribs.srcset;
        } else if (images[index].attribs.src) {
            var image = images[index].attribs.src;
        }
        if (image) {
            image = 'http://www.haaretz.co.il' + image;
            retval.img.push(image);
        }
    }
    return retval;
}


function makoContentParser(parser, content) {
    var retval = {
        content: content,
        img: []
    }
    retval.title = parser('.articleHeader h1').text(); // event's title
    retval.description = parser('.articleHeader h2').text(); // event's sub-header
    retval.author = parser('.katav').text().trim();
    var images = parser('.article img'); // event's image source
    for (var index = 0; index < images.length; index++) {
        var image = images[index].attribs.src
        if (S(image).contains('http://')) {
            retval.img.push(images[index].attribs.src);
        }
    }
    return retval;
}

function ynetContentParser(parser) {
    var retval = {
        img: []
    }
    retval.title = parser('.art_header_title').text() // event's title
    retval.description = parser('.art_header_sub_title').text() // event's sub-header
    retval.author = parser('.art_header_footer_author a').text().trim();

    var images = parser('.art_body img'); // event's image source
    for (var index = 0; index < images.length; index++) {
        var image = images[index].attribs.src
        if (S(image).contains('http://')) {
            retval.img.push(images[index].attribs.src);
        }
    }
    return retval;
}

function wallaContentParser(parser) {
    var retval = {
        img: []
    }
    retval.title = parser('.main h1').text().trim(); // event's title
    retval.description = parser('.main h2').text().trim();
    retval.author = parser('.main .author .text').text().trim();
    // event's sub-header
    var images = parser('.article-content img'); // event's image source
    for (var index = 0; index < images.length; index++) {
        var image = images[index].attribs.src
        if (S(image).contains('http://')) {
            retval.img.push(images[index].attribs.src);
        }
    }
    return retval;

}

module.exports.contentParser = function (content, website) {
    var parser = cheerio.load(content);

    switch (website) {
        case 'mako':
        {
            return makoContentParser(parser, content);
        }
        case 'ynet':
        {
            return ynetContentParser(parser);
        }
        case 'walla':
        {
            return wallaContentParser(parser);
        }
        case 'haaretz':
        {
            return haaretzContentParser(parser);
        }
        case 'israelhayom':
        {
            return israelhayomContentParser(parser);
        }
        case 'one':
        {
            return oneContentParser(parser); //bad format
        }
        case 'sport5':
        {
            return sport5ContentParser(parser);
        }
        case 'nrg':
        {
            return nrgContentParser(parser); // bad format
        }
        case 'maariv':
        {
            return maarivContentParser(parser); // bad format
        }
        case 'themarker':
        {
            return themarkerContentParser(parser); // bad format
        }
        case 'nana10':
        {
            return nana10ContentParser(parser); // bad format
        }
    }

};
