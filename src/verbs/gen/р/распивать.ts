import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распивать: PerfectVerb = {
  name: Word('распивать', 6),
  singular1stPerson: Word('распиваю', 6),
  singular2ndPerson: Word('распиваешь', 6),
  singular3rdPerson: Word('распивает', 6),
  plural1stPerson: Word('распиваем', 6),
  plural2ndPerson: Word('распиваете', 6),
  plural3rdPerson: Word('распивают', 6),
  masculinePast: Word('распивал', 6),
  femininePast: Word('распивала', 6),
  neuterPast: Word('распивало', 6),
  pluralPast: Word('распивали', 6),
  imperativeInformal: Word('распивай', 6),
  imperativeFormal: Word('распивайте', 6),
  imperfect: [],
};

perfectVerbs.set(распивать.name.text, распивать);

export { распивать };