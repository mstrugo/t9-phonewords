import cached  from 'cached';

const wordsCache = cached('words', { backend: { type: 'memory' } });

const letters: string[] = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

const collectWords = (root: string[], words: string[], str = '', iteration = 0) => {
  // If the `str` has the same length as the `root`, then save the word and return
  if (str.length === root.length) {
    words.push(str);
    return;
  }

  const pathLetters = root[iteration].split('');

  for (const letter of pathLetters) {
    // Recursion concatenating `str`
    collectWords(root, words, str + letter, iteration + 1);
  }
}

const resolveWords = (term: string) => {
  // 0 and 1 are not allowed, then return an empty array
  if (term.includes('1') || term.includes('0')) {
    return [];
  }

  return wordsCache.getOrElse(term, () => {
    const words: string[] = [];

    // Replace every character for corresponding set of letters
    // - 2: 0 and 1 are not allowed
    const chars = term.split('').map(letter => letters[parseInt(letter, 10) - 2]);

    // Populate the words
    collectWords(chars, words);

    // Save this array in the cache for future petitions
    return words;

  }).then((data) => {
    // Return the value from the cache or previous step
    return data;
  });
}

interface QueryArgs {
  term: string;
}

export const resolvers = {
  words: ({ term }: QueryArgs) => resolveWords(term),
};
