 // SPEC FILE //
 /* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    "use strict";
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    // Tests that RSS Feeds loads and shows at least 1 article.
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         // Run articles through for loop, store value in [i]
         // Tests that Feed URL has definition and content 
         // then checks that the Feed's name is populated
    describe('Feed Looper', function() {
        it('ensures all URLs and Names are not empty', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].url).toContain('http');
                expect(allFeeds[i].name).toBeDefined();
            }
        });
    });

    });

    /* TODO: Write a new test suite named "The menu" */
    // store a var menu for jQuery DOM manipulation
    describe("The Menu", function() {
        var menu = $('.menu-icon-link');        
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         // Body's menu-hidden class is hiding and listening for click
         it('ensures menu element is hidden', function() {
            expect(document.getElementsByClassName("menu-hidden")).toBeTruthy();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          // menu appears when clicked.
          // try this in the console! define var menu then call menu.click();
          // it's really exciting to see my javascript work in real time.
          // I probably called menu.click() a few minutes too long just watching it work
         it("ensures menu toggles", function() {
            menu.click();
             expect($('body').hasClass('menu-hidden')).toBe(false); //menu displays when clicked

            menu.click();
             expect($('body').hasClass('menu-hidden')).toBe(true); //menu hides when clicked again
         });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    // load the first feed before testing
    describe("Initial Entries", function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        }, 1000);

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         // several tests for checking the presence of entries in feed
         it("ensures .entry element in .feed container after asynch load", function(done) {
             expect($('.feed .entry-link .entry').length).toBeGreaterThan(0);
             expect($('.feed').length).toBe(1);
             expect($('.feed').find('.entry').length).toBeGreaterThan(0);
             expect($('.feed .entry').length).toBeGreaterThan(0);
             expect($('.entry').length).toBeGreaterThan(0);
             done();
         });
    });

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        // collect a snapshot of several feed screens and compares them for differences
        // also serves the function of checking for undefined feeds by testing not.toEqual
        describe("New Feed Selection", function() {
            var firstFeed;
            var secondFeed;
            var thirdFeed;

            beforeEach(function(done) {
                loadFeed(0, function() {
                    firstFeed = $('.entry').find("h2")[0].innerText;
                });
                loadFeed(1, function() {
                    secondFeed = $('.entry').find("h2")[0].innerText;
                    done();
                })
         });
            // another fun console.log practice is to call loadFeed with params 
            // after calling Feed variables. 
            // JavaScript in action!!
         it("ensures content changes", function(done) {
            expect(firstFeed).not.toEqual(secondFeed);
            expect(secondFeed).not.toEqual(thirdFeed);
            done();
         });

         afterAll(function(done) {
            loadFeed(0, done);
         }, 1000);

        }); 
        // if next and previous buttons (Arrows) were incorporated this would ensure
        // that the buttons are responsive and article entries change
        describe("New Feed Screen", function() {
            var nextArrow = $('.menu.icon.next');
            var previousArrow = $('.menu.icon.previous');
            var feedPage;
            var feedPage2;

            beforeEach(function(done) {
                loadFeed(0, function() {
                    feedPage = $('.entry').find("h2")[0].innerText;
                });
                loadFeed(1, function() {
                    feedPage2 = $('.entry').find("h2")[0].innerText;
                    done();
                });
            });

            it("changes articles displayed in feed", function(done) {
                nextArrow.click();
                 expect(feedPage2).toEqual($('.entry').find("h2")[0].innerText);

                previousArrow.click();
                 expect(feedPage).toBe($('.entry').find("h2")[0].innerText);
                 done();
            });

            afterAll(function(done) {
                loadFeed(0, done);
            }, 1000);
        });
}());
