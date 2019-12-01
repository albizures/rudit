import { Pronoun } from '../utils/Pronoun';
import { Word } from '../utils/Word';

const plural2ndPerson: Pronoun = {
  nominative: Word('вы', 1),
  genitive: Word('вас', 1),
  dative: Word('вам', 1),
  accusative: Word('вас', 1),
  instrumental: Word('вами', 2),
};

export { plural2ndPerson };
