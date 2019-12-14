import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрохотать: PerfectVerb = {
  name: Word('загрохотать', 8),
  singular1stPerson: Word('загрохочу', 8),
  singular2ndPerson: Word('загрохочешь', 6),
  singular3rdPerson: Word('загрохочет', 6),
  plural1stPerson: Word('загрохочем', 6),
  plural2ndPerson: Word('загрохочете', 6),
  plural3rdPerson: Word('загрохочут', 6),
  masculinePast: Word('загрохотал', 8),
  femininePast: Word('загрохотала', 8),
  neuterPast: Word('загрохотало', 8),
  pluralPast: Word('загрохотали', 8),
  imperativeInformal: Word('загрохочи', 8),
  imperativeFormal: Word('загрохочите', 8),
  imperfect: [],
};

perfectVerbs.set(загрохотать.name.text, загрохотать);

export { загрохотать };