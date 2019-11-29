import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 3;

const read: Verb = {
  name: Word('жить', 1),
  singular1stPerson: Word('живу́', stress),
  singular2ndPerson: Word('живёшь', stress),
  singular3rdPerson: Word('живёт', stress),
  plural1stPerson: Word('живём', stress),
  plural2ndPerson: Word('живёте', stress),
  plural3rdPerson: Word('живу́т', stress),
  masculinePast: Word('жи́л', 1),
  femininePast: Word('жила́', stress),
  neuterPast: Word('жило́', stress),
  pluralPast: Word('жи́ли', 1),
};

export default read;
