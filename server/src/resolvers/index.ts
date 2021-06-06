const letters: string[] = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

const collectWords = (root: string[], words: string[], str = '', iteration = 0) => {
  if (str.length === root.length) {
    words.push(str);
    return;
  }

  const pathLetters = root[iteration].split('');

  for (const letter of pathLetters) {
    collectWords(root, words, str + letter, iteration + 1);
  }
}

const resolveWords = (term: string) => {
  const words: string[] = [];
  const chars = term.split('').map(letter => letters[parseInt(letter, 10) - 2]); // 0 and 1 are not allowed

  collectWords(chars, words);

  return words;
}

interface QueryArgs {
  term: string;
}

export const resolvers = {
  words: ({ term }: QueryArgs) => resolveWords(term),
};
