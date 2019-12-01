import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 3;

const toRead: Verb = {
  name: Word('гулять', stress),
  singular1stPerson: Word('гуля́ю', stress),
  singular2ndPerson: Word('гуля́ешь', stress),
  singular3rdPerson: Word('гуля́ет', stress),
  plural1stPerson: Word('гуля́ем', stress),
  plural2ndPerson: Word('гуля́ете', stress),
  plural3rdPerson: Word('гуля́ют', stress),
  masculinePast: Word('гуля́л', stress),
  femininePast: Word('гуля́ла', stress),
  neuterPast: Word('гуля́ло', stress),
  pluralPast: Word('гуля́ли', stress),
  imperativeInformal: Word('гуля́й', stress),
  imperativeFormal: Word('гуля́йте', stress),
};

export { toRead };
