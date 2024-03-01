// EXAMPLE 1 - Remove all Line Breaks from a String in JavaScript

const str = 'a\n multi \n line \r string \n!';

// ✅ Remove all line breaks from string
const withoutLineBreaks = str.replace(/[\r\n]/gm, '');
console.log(withoutLineBreaks); // 👉️ a multi line string !

// // -----------------------------------------------------

// // ✅ Remove only line breaks from the start and end of the string

// const str2 = '\nbobby hadz\n';
// const result = str2.trim();

// console.dir(result); // 👉️ 'bobby hadz'

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove Line Breaks from Start and End of a String in JavaScript

// const str = '\n\r\na multi line string!\n\r\n';

// const result = str.trim();
// console.log(result); // 👉️ a multi line string!

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove all line breaks and replace multiple spaces with a single space

// const str = 'a\n     multi   \n   line   \r   string';

// const result = str.replace(/\s+/g, ' ').trim();
// console.dir(result); // 👉️ 'a multi line string'

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove Line Breaks from the Start and End of a String using regex

// const str = '\none two\n';

// const result = str.replace(/^\s+|\s+$/g, '');
// console.log(result); // 👉️ "one two"
