import { Pronoun } from '../utils/Pronoun';
import { Word } from '../utils/Word';

const singular1stPerson: Pronoun = {
  nominative: Word('я', 0),
  genitive: Word('меня', 3),
  dative: Word('мне', 2),
  accusative: Word('меня', 3),
  instrumental: Word('мной', 2),
};

export { singular1stPerson };
