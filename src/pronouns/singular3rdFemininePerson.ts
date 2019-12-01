import { Pronoun } from '../utils/Pronoun';
import { Word } from '../utils/Word';

const singular3rdFemininePerson: Pronoun = {
  nominative: Word('oнa', 2),
  genitive: Word('её', 1),
  dative: Word('eй', 0), // TODO check stress
  accusative: Word('её', 1),
  instrumental: Word('ей', 0), // TODO check stress
};

export { singular3rdFemininePerson };
