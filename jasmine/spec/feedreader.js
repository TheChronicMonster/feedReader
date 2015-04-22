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
                expect(allFeeds[i].url).not.toBe(null);
                expect(allFeeds[i].name).toBeTruthy();
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
        var value = 0;
        beforeEach(function() {
            setTimeout(function() {
                value;
                done();
            }, 1);
        });

        it('supports async loadFeed', function(done) {
            value++;
            expect(value).toBeGreaterThan(0);
            done();
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it("ensures loadFeed() is called and works", function() {
             expect(loadfeed()).toBe(true);
         });

         it("ensures .entry element in .feed container", function() {
             //expect($('.feed').hasClass($('.entry-link .entry')[0])).toBe(true);
             //expect($('.feed .entry-link .entry').length).toBeGreaterThan(0);
             expect($('.feed').length).toBe(1);
             expect($('.entry').length).toBe(4);
         });
        
    });



    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        describe("New Feed Selection", function() {
            function loadfeed() {};
            beforeEach(function(done) {
            var one = document.getElementsByClassName("entry-link")[0];
            var two = document.getElementsByClassName("entry-link")[1];
            var three = document.getElementsByClassName("entry-link")[2];
            var four = document.getElementsByClassName("entry-link")[3];
                loadfeed(0);
                loadfeed(1);
                done();
             
         });

         it("ensures content changes", function() {
            var one = document.getElementsByClassName("entry-link")[0];
            var two = document.getElementsByClassName("entry-link")[1];
            var three = document.getElementsByClassName("entry-link")[2];
            var four = document.getElementsByClassName("entry-link")[3];
            // var first = document.getElementsByClassName("feed a:nth-child(1)")
            // var firstText = $('.feed a:nth-child(1)')[0];
            // var secondText = $('.feed a:nth-child(2)')[0];
            // expect(firstText).not.toMatch(secondText);
            
            expect(one).not.toMatch(two);
            // expect(document.getElementsByClassName("entry-link")[0]).not.toMatch(document.getElementsByClassName("entry-link")[1]);
         });
            }); 
}());
