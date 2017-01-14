'use strict'

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function(string) {
  // Split the string into an array using white space as delimiters.
  // Each string in the array will still have non-word characters, such as
  // punctuation marks.  /\s+/ is a regular expression that selects all
  // whitespace characters (spaces, tabs, line breaks, etc.).
  const splitString = string.split(/\s+/);
  // Create an array to store the normalized words as strings.  This will be the
  // return value.
  const normalizedWords = [];

  // Iterate through each element of splitString.
  for (let i = 0; i < splitString.length; i++) {
    // Set ith string to be the ith element of splitString.
    const ithString = splitString[i];
    // Replace ithString's non-word characters with an empty string and set it
    // to word.
    // /\W+/ is a regular expression that selects all non-word characters.
    const word = ithString.replace(/\W+/, '');
    // Capitalize every letter in the string word and set it to upperCasedWord.
    const upperCasedWord = word.toUpperCase();

    // Set the ith element of normalizedWords to the normalized (uppercased and
    // stripped of punctuation) word.
    normalizedWords[i] = upperCasedWord;
  }

  // Return the array of normalized words.
  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function(string) {
  // Normalize the string and set it to normalizedWords.
  const normalizedWords = normalizeWords(string);
  // Create an objcet to store the unique words as key/value pairs.
  const dictionary = {};
  // Create an array to store the unique words.  This will be the return value.
  const uniqueWordsArray = [];

  // Iterate through each element of normalizedWords.
  for (let i = 0; i < normalizedWords.length; i++) {
    // Set the ith element of normalizedWords to word.
    const word = normalizedWords[i];

    // Set a key in dictionary named after word and set its value to true.  The
    // value here doesn't matter.  We only care about the fact that dictionary
    // doesn't allow duplicate keys.
    dictionary[word] = true;
  }

  // Iterate through each key in the dictionary object.  The keys in dictionary
  // are the normalized words in string.
  for (const key in dictionary) {
    // Add each key (normalized word) to uniqueWordsArray.
    uniqueWordsArray.push(key);
  }

  // Return the array of unique words.
  return uniqueWordsArray;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.
const wordCount = function(string, unique) {
  // Check if unique is truthy or falsey.  If wordCount() gets called without a
  // second argument (e.g., wordCount('hello, world.'), then unique will be
  // undefined, which is falsey.
  if (unique) {
    // Call uniqueWords() and set its return value (an array of unique words) to
    // uniqueWordsArray.
    const uniqueWordsArray = uniqueWords(string);
    // Get the length of uniqueWordsArray and set it to numberOfUniqueWords.
    const numberOfUniqueWords = uniqueWordsArray.length;

    // Return the number of unique words.
    return numberOfUniqueWords;
  }

  // Call normalizedWords() and sets its return value (an array of all words) to
  // words.
  const words = normalizeWords(string);
  // Get the length of words and set it to numberofWords.
  const numberofWords = words.length;

  // Return the number of words.
  return numberofWords;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function(string) {
  // Create an object to store the frequencies as key/value pairs, with the word
  // as the key and the frequency as the value.
  const frequencies = {};
  // Normalize the string and store it in words.
  const words = normalizeWords(string);

  // Iterate through each word in the words array.
  for (let i = 0; i < words.length; i++) {
    // Set the ith element of words (current word) to word.
    const word = words[i];

    // Check the frequencies object for a key named after word.  If it doesn't
    // exist, then it'll return undefined, which is a falsey value.
    const frequency = frequencies[word];

    // Check if frequency is truthy (non-zero numbers are truthy) or falsey.
    if (frequency) {
      // If it's truthy, then set the value of the key named after word to its
      // current value plus one.
      frequencies[word] = frequency + 1;
    } else {
      // If it's falsey, then set a new key named after word in the frequencies
      // object to 1.  This means that it's the first time the loop encountered
      // this word and is inserting it into frequencies and setting it to 1.
      frequencies[word] = 1;
    }
  }

  // Return the frequencies object.
  return frequencies;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
};
