import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 1;

const read: Verb = {
  name: Word('писать', stress),
  singular1stPerson: Word('пишу́', 3),
  singular2ndPerson: Word('пи́шешь', stress),
  singular3rdPerson: Word('пи́шет', stress),
  plural1stPerson: Word('пи́шем', stress),
  plural2ndPerson: Word('пи́шете', stress),
  plural3rdPerson: Word('пи́шут', stress),
  masculinePast: Word('писа́л', 3),
  femininePast: Word('писа́ла', 3),
  neuterPast: Word('писа́ло', 3),
  pluralPast: Word('писа́ли', 3),
  imperativeInformal: Word('пиши́', 3),
  imperativeFormal: Word('пиши́те', 3),
};

export default read;
