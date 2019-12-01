import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 2;

const read: Verb = {
  name: Word('знать', stress),
  singular1stPerson: Word('зна́ю', stress),
  singular2ndPerson: Word('зна́ешь', stress),
  singular3rdPerson: Word('зна́ет', stress),
  plural1stPerson: Word('зна́ем', stress),
  plural2ndPerson: Word('зна́ете', stress),
  plural3rdPerson: Word('зна́ют', stress),
  masculinePast: Word('зна́л', stress),
  femininePast: Word('зна́ла', stress),
  neuterPast: Word('зна́ло', stress),
  pluralPast: Word('зна́ли', stress),
  imperativeInformal: Word('зна́й', stress),
  imperativeFormal: Word('зна́йте', stress),
};

export default read;
