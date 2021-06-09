import { resolvers } from '.';

describe('Word resolver', (): void => {
  it('Translate 1 number correctly', async () => {
    const expected = ['w', 'x', 'y', 'z'];
    const actual = await resolvers.words({ term: '9' });

    expect(actual).toStrictEqual(expected);
  });

  it('Translate 2 numbers correctly', async () => {
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    const actual = await resolvers.words({ term: '23' });

    expect(actual).toStrictEqual(expected);
  });

  it('Translate 3 numbers correctly', async () => {
    const expected = ['adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi', 'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi', 'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi'];
    const actual = await resolvers.words({ term: '234' });

    expect(actual).toStrictEqual(expected);
  });

  it('Translate 10 numbers correctly', async () => {
    const result = await resolvers.words({ term: "2345678998" });
    const expectedLength = 139968;

    expect(result).toHaveLength(expectedLength);
  });

  it('Translate nothing given invalid values', async () => {
    const expected: string[] = [];
    const actual = await resolvers.words({ term: '10' });

    expect(actual).toStrictEqual(expected);
  });

});
