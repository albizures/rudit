import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const споласкивать: PerfectVerb = {
  name: Word('споласкивать', 4),
  singular1stPerson: Word('споласкиваю', 4),
  singular2ndPerson: Word('споласкиваешь', 4),
  singular3rdPerson: Word('споласкивает', 4),
  plural1stPerson: Word('споласкиваем', 4),
  plural2ndPerson: Word('споласкиваете', 4),
  plural3rdPerson: Word('споласкивают', 4),
  masculinePast: Word('споласкивал', 4),
  femininePast: Word('споласкивала', 4),
  neuterPast: Word('споласкивало', 4),
  pluralPast: Word('споласкивали', 4),
  imperativeInformal: Word('споласкивай', 4),
  imperativeFormal: Word('споласкивайте', 4),
  imperfect: [],
};

perfectVerbs.set(споласкивать.name.text, споласкивать);

export { споласкивать };