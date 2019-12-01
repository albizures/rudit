import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 1;

const read: Verb = {
  name: Word('учить', 2),
  singular1stPerson: Word('учу́', 2),
  singular2ndPerson: Word('у́чишь', stress),
  singular3rdPerson: Word('у́чит', stress),
  plural1stPerson: Word('у́чим', stress),
  plural2ndPerson: Word('у́чите', stress),
  plural3rdPerson: Word('у́чат', stress),
  masculinePast: Word('учи́л', 2),
  femininePast: Word('учи́ла', 2),
  neuterPast: Word('учи́ло', 2),
  pluralPast: Word('учи́ли', 2),
  imperativeInformal: Word('учи́', 2),
  imperativeFormal: Word('учи́те', 2),
};

export default read;
