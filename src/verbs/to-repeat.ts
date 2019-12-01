import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 6;

const read: Verb = {
  name: Word('повторять', stress),
  singular1stPerson: Word('повторя́ю', stress),
  singular2ndPerson: Word('повторя́ешь', stress),
  singular3rdPerson: Word('повторя́ет', stress),
  plural1stPerson: Word('повторя́ем', stress),
  plural2ndPerson: Word('повторя́ете', stress),
  plural3rdPerson: Word('повторя́ют', stress),
  masculinePast: Word('повторя́л', stress),
  femininePast: Word('повторя́ла', stress),
  neuterPast: Word('повторя́ло', stress),
  pluralPast: Word('повторя́ли', stress),
  imperativeInformal: Word('повторя́й', stress),
  imperativeFormal: Word('повторя́йте', stress),
};

export default read;
