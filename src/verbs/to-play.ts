import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 3;

const read: Verb = {
  name: Word('играть', stress),
  singular1stPerson: Word('игра́ю', stress),
  singular2ndPerson: Word('игра́ешь', stress),
  singular3rdPerson: Word('игра́ет', stress),
  plural1stPerson: Word('игра́ем', stress),
  plural2ndPerson: Word('игра́ете', stress),
  plural3rdPerson: Word('игра́ют', stress),
  masculinePast: Word('игра́л', stress),
  femininePast: Word('игра́ла', stress),
  neuterPast: Word('игра́ло', stress),
  pluralPast: Word('игра́ли', stress),
  imperativeInformal: Word('игра́й', stress),
  imperativeFormal: Word('игра́йте', stress),
};

export default read;
