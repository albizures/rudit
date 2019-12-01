import { Pronoun } from '../utils/Pronoun';
import { Word } from '../utils/Word';

const plural1stPerson: Pronoun = {
  nominative: Word('мы', 1),
  genitive: Word('нас', 1),
  dative: Word('нам', 1),
  accusative: Word('нас', 1),
  instrumental: Word('нами', 2),
};

export { plural1stPerson };
