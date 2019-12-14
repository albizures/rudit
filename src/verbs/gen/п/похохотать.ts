import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похохотать: PerfectVerb = {
  name: Word('похохотать', 7),
  singular1stPerson: Word('похохочу', 7),
  singular2ndPerson: Word('похохочешь', 5),
  singular3rdPerson: Word('похохочет', 5),
  plural1stPerson: Word('похохочем', 5),
  plural2ndPerson: Word('похохочете', 5),
  plural3rdPerson: Word('похохочут', 5),
  masculinePast: Word('похохотал', 7),
  femininePast: Word('похохотала', 7),
  neuterPast: Word('похохотало', 7),
  pluralPast: Word('похохотали', 7),
  imperativeInformal: Word('похохочи', 7),
  imperativeFormal: Word('похохочите', 7),
  imperfect: [],
};

perfectVerbs.set(похохотать.name.text, похохотать);

export { похохотать };