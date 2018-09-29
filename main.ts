declare function require(name:string);
var fs = require('fs');

class WordCount {

    constructor(src:string) {
        // Read all of the file content 
        fs.readFile(src, 'utf8', function(err, data) {
            if (err) throw err;
            // Send to function to clean text
            if (data) {
                cleanText(data);
            }
        })
        function cleanText(data) {
            let reg:RegExp = /\n| /; // Strip of all new lines and blanks
            let clean = data.split(reg);
            // Send to function to list all words
            if (clean) {
                listAllWords(clean);
            }
        }
        function listAllWords(clean) {
            let count = {};
            for (let i of clean){
                count[i] = (count[i]||0) + 1;
            }
            // Send to function to sort all words
            if (count) {
                sortAllWords(count);
            }
        }
        function sortAllWords(count) {
            var sorted = []; // Declare a new array
            for (let key in count) sorted.push([key, count[key]]); // Create a new array for use - sorted[word] = count;
            sorted.sort(function (a, b) { return a[1] - b[1] }); // Sort the array based on the second element (count)
            sorted.reverse(); // Reverse the result array
            // Print out words in order of how often they appear
            for (let i = 1; i < 11; i++) {
                console.log((i)+ '.' + ' ' + sorted[i][0] + ' - ' + sorted[i][1]);
            }
        }
    }
}

let src:string = 'hitch.txt';
let count = new WordCount(src);