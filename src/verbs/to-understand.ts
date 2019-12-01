import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 5;

const read: Verb = {
  name: Word('понимать', stress),
  singular1stPerson: Word('понима́ю', stress),
  singular2ndPerson: Word('понима́ешь', stress),
  singular3rdPerson: Word('понима́ет', stress),
  plural1stPerson: Word('понима́ем', stress),
  plural2ndPerson: Word('понима́ете', stress),
  plural3rdPerson: Word('понима́ют', stress),
  masculinePast: Word('понима́л', stress),
  femininePast: Word('понима́ла', stress),
  neuterPast: Word('понима́ло', stress),
  pluralPast: Word('понима́ли', stress),
  imperativeInformal: Word('понима́й', stress),
  imperativeFormal: Word('понима́йте', stress),
};

export default read;
