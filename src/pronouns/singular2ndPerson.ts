import { Pronoun } from '../utils/Pronoun';
import { Word } from '../utils/Word';

const singular2ndPerson: Pronoun = {
  nominative: Word('ты', 1),
  genitive: Word('тебя', 3),
  dative: Word('тебе', 3),
  accusative: Word('тебя', 3),
  instrumental: Word('тобой', 3),
};

export { singular2ndPerson };
