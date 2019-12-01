import { Pronoun } from '../utils/Pronoun';
import { Word } from '../utils/Word';

const singular3rdNeuterPerson: Pronoun = {
  nominative: Word('oнo', 2),
  genitive: Word('его', 2),
  dative: Word('ему', 2),
  accusative: Word('его', 2),
  instrumental: Word('им', 0),
};

export { singular3rdNeuterPerson };
