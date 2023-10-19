// Extension Name: Counter++
// Extension ID: counterplusplus
// Description: Count anything in Turbowarp
// By: MrRedstonia <https://github.com/MrRedstonia>

(function(ext) {
    // Variable to hold the count
    var count = 0;

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // “count {input} in {input}" Block
            ['r', 'count %s in %s', 'countInput', 'Hello', 'Hello, World!'],

            // “count words {input}" Block
            ['r', 'count words %s', 'countWords', ''],

        ['---'],

            // Block to get current count
            ['r', 'counter', 'getCounter'],

            // Block to reset the counter to zero
            [' ', 'reset counter', 'resetCounter'],

            // Block to set the counter to a specific value
            [' ', 'set counter to %n', 'setCounter', 10],

            // Block to change the counter by a specified amount
            [' ', 'change counter by %n', 'changeCounterBy', 1],
        ],
    };

    // Function to the “count {input} in {input}" block
    ext.countInput = function(word, text) {
        var count = 0;
        var wordLen = word.length;
        var textLen = text.length;
        if (word === "") {
            return 0;
        }
        for (var i = 0; i < textLen - wordLen + 1; i++) {
            if (text.substring(i, i + wordLen) === word) {
                count++;
            }
        }
        return count;
    };

    // Function to count words in a string
    ext.countWords = function(text) {
        if (text.trim() === "") {
            // If the input is blank or only contains spaces, return 0
            return 0;
        }
        var words = text.split(/\s+/); // Split by whitespace
        return words.length;
    };

    // Function to get the current count
    ext.getCounter = function() {
        return count;
    };

    // Function to reset the counter to zero
    ext.resetCounter = function() {
        count = 0;
    };

    // Function to set the counter to a specific value
    ext.setCounter = function(value) {
        count = value;
    };

    // Function to change the counter by a specified amount
    ext.changeCounterBy = function(amount) {
        count += amount;
    };

    // Register the extension
    ScratchExtensions.register('Counter++', descriptor, ext);
    descriptor.color = "#4A4A5E";
})(this);
