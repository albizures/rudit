import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загоготать: PerfectVerb = {
  name: Word('загоготать', 7),
  singular1stPerson: Word('загогочу', 7),
  singular2ndPerson: Word('загогочешь', 5),
  singular3rdPerson: Word('загогочет', 5),
  plural1stPerson: Word('загогочем', 5),
  plural2ndPerson: Word('загогочете', 5),
  plural3rdPerson: Word('загогочут', 5),
  masculinePast: Word('загоготал', 7),
  femininePast: Word('загоготала', 7),
  neuterPast: Word('загоготало', 7),
  pluralPast: Word('загоготали', 7),
  imperativeInformal: Word('загогочи', 7),
  imperativeFormal: Word('загогочите', 7),
  imperfect: [],
};

perfectVerbs.set(загоготать.name.text, загоготать);

export { загоготать };