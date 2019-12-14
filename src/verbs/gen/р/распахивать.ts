import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распахивать: PerfectVerb = {
  name: Word('распахивать', 4),
  singular1stPerson: Word('распахиваю', 4),
  singular2ndPerson: Word('распахиваешь', 4),
  singular3rdPerson: Word('распахивает', 4),
  plural1stPerson: Word('распахиваем', 4),
  plural2ndPerson: Word('распахиваете', 4),
  plural3rdPerson: Word('распахивают', 4),
  masculinePast: Word('распахивал', 4),
  femininePast: Word('распахивала', 4),
  neuterPast: Word('распахивало', 4),
  pluralPast: Word('распахивали', 4),
  imperativeInformal: Word('распахивай', 4),
  imperativeFormal: Word('распахивайте', 4),
  imperfect: [],
};

perfectVerbs.set(распахивать.name.text, распахивать);

export { распахивать };