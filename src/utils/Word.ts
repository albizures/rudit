import memoize from 'lodash.memoize';

interface Word {
  text: string;
  stress: number;
}

const Word = memoize(
  (text: string, stress: number): Word => {
    if (text.length < stress) {
      throw new Error(`Invalid stress 
    Word: ${text} (text.length) - Stress: ${stress} 
      `);
    }

    return {
      text,
      stress,
    };
  },
);

export { Word };
