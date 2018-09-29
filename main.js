var fs = require('fs');
var WordCount = /** @class */ (function () {
    function WordCount(src) {
        // Read all of the file content 
        fs.readFile(src, 'utf8', function (err, data) {
            if (err)
                throw err;
            // Send to function to clean text
            if (data) {
                cleanText(data);
            }
        });
        function cleanText(data) {
            var reg = /\n| /; // Strip of all new lines and blanks
            var clean = data.split(reg);
            // Send to function to list all words
            if (clean) {
                listAllWords(clean);
            }
        }
        function listAllWords(clean) {
            var count = {};
            for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
                var i = clean_1[_i];
                count[i] = (count[i] || 0) + 1;
            }
            // Send to function to sort all words
            if (count) {
                sortAllWords(count);
            }
        }
        function sortAllWords(count) {
            var sorted = []; // Declare a new array
            for (var key in count)
                sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
            sorted.sort(function (a, b) { return a[1] - b[1]; }); // Sort the array based on the second element (count)
            sorted.reverse(); // Reverse the result array
            // Print out words in order of how often they appear
            for (var i = 1; i < 11; i++) {
                console.log((i) + '.' + ' ' + sorted[i][0] + ' - ' + sorted[i][1]);
            }
        }
    }
    return WordCount;
}());
var src = 'hitch.txt';
var count = new WordCount(src);
