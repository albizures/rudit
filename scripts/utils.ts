import axios from 'axios';

const getHtml = async (url: string): Promise<string> => {
  const { data: raw } = await axios.get<string>(url);

  return raw;
};

const getStressIndex = (word: string): number => {
  const letters = word.split('');
  for (let index = 0; index < letters.length; index++) {
    const letter = letters[index];
    if (letter === '́') {
      // the stress add an extra position to the array of letters
      return index - 1;
    }

    if (letter === 'ё') {
      return index;
    }
  }

  return -1;
};

const createQueries = ($: CheerioStatic) => {
  const getWord = (id: string): string => {
    const $word = $(`#${id}`);

    const defaultValue = $word.data('default');
    const stressedValue = $word.data('stressed') || defaultValue;

    return `Word('${defaultValue}', ${getStressIndex(stressedValue)})`;
  };

  return {
    getWord,
  };
};

export { getHtml, getStressIndex, createQueries };
