import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хохотать: PerfectVerb = {
  name: Word('хохотать', 5),
  singular1stPerson: Word('хохочу', 5),
  singular2ndPerson: Word('хохочешь', 3),
  singular3rdPerson: Word('хохочет', 3),
  plural1stPerson: Word('хохочем', 3),
  plural2ndPerson: Word('хохочете', 3),
  plural3rdPerson: Word('хохочут', 3),
  masculinePast: Word('хохотал', 5),
  femininePast: Word('хохотала', 5),
  neuterPast: Word('хохотало', 5),
  pluralPast: Word('хохотали', 5),
  imperativeInformal: Word('хохочи', 5),
  imperativeFormal: Word('хохочите', 5),
  imperfect: ['захохотать'],
};

perfectVerbs.set(хохотать.name.text, хохотать);

export { хохотать };