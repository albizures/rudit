import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const stress = 1;

const read: Verb = {
  name: Word('любить', 3),
  singular1stPerson: Word('люблю́', 4),
  singular2ndPerson: Word('лю́бишь', stress),
  singular3rdPerson: Word('лю́бит', stress),
  plural1stPerson: Word('лю́бим', stress),
  plural2ndPerson: Word('лю́бите', stress),
  plural3rdPerson: Word('лю́бят', stress),
  masculinePast: Word('люби́л', 3),
  femininePast: Word('люби́ла', 3),
  neuterPast: Word('люби́ло', 3),
  pluralPast: Word('люби́ли', 3),
  imperativeInformal: Word('люби́', 3),
  imperativeFormal: Word('люби́те', 3),
};

export default read;
