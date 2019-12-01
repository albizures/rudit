import { Pronoun } from '../utils/Pronoun';
import { Word } from '../utils/Word';

const plural3rdPerson: Pronoun = {
  nominative: Word('oни', 2),
  genitive: Word('их', 0),
  dative: Word('их', 0),
  accusative: Word('их', 0),
  instrumental: Word('ими', 0),
};

export { plural3rdPerson };
