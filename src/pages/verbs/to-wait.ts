import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 2;

const read: Verb = {
  name: Word('ждать', stress),
  singular1stPerson: Word('жду́', stress),
  singular2ndPerson: Word('ждёшь', stress),
  singular3rdPerson: Word('ждёт', stress),
  plural1stPerson: Word('ждём', stress),
  plural2ndPerson: Word('ждёте', stress),
  plural3rdPerson: Word('жду́т', stress),
  masculinePast: Word('жда́л', stress),
  femininePast: Word('ждала́', 4),
  neuterPast: Word('жда́ло', stress),
  pluralPast: Word('жда́ли', stress),
};

export default read;
