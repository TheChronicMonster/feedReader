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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
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
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    describe('Feed Looper', function() {
        it('ensures all URLs and Names are not empty', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].url).toContain('http');
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(null);
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(null);
                expect(allFeeds[i].name).toContain('');
                expect(allFeeds[i]).toBeTruthy();
            };
        });
    });


    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The Menu", function() {
        var menu = $('.menu-icon-link');        
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('ensures menu element is hidden', function() {
            expect(document.getElementsByClassName("menu-hidden")).toBeTruthy();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         it("ensures menu toggles", function() {
            menu.click();
             expect($('body').hasClass('menu-hidden')).toBe(false); //menu displays when clicked

            menu.click();
             expect($('body').hasClass('menu-hidden')).toBe(true); //menu hides when clicked again
         });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {

        beforeEach(function(done) {
            loadFeed(0, done)
        });


        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */


         it("ensures .entry element in .feed container after asynch load", function() {
             //expect($('.feed').hasClass($('.entry'))).toBe(true);
             expect($('.feed .entry-link .entry').length).toBeGreaterThan(0);
             expect($('.feed').length).toBe(1);
             expect($('.feed').find('.entry').length).toBeGreaterThan(0);
             expect($('.feed .entry').length).toBeGreaterThan(0);
             expect($('.entry').length).toBeGreaterThan(0);
         });
    });



    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        describe("New Feed Selection", function() {
            var firstFeed;
            var secondFeed;
            var thirdFeed;
            var fourthFeed;

            beforeEach(function(done) {
                loadFeed(0, function() {
                    firstFeed = $('.entry').find("h2")[0].innerText;
                });
                loadFeed(1, function() {
                    secondFeed = $('.entry').find("h2")[0].innerText;
                    done();
                });
                loadFeed(2, function() {
                    thirdFeed = $('.entry').find("h2")[0].innerText;
                });
                loadFeed(3, function() {
                    fourthFeed = $('.entry').find("h2")[0].innerText;
                })
         });

         it("ensures content changes", function() {
            expect(firstFeed).not.toEqual(secondFeed);
            expect(secondFeed).not.toEqual(thirdFeed);
            expect(secondFeed).not.toEqual(fourthFeed);
            expect(firstFeed).not.toEqual(fourthFeed);
         });

         afterAll(function(done) {
            loadFeed(0, done);
         });

            }); 
}());
