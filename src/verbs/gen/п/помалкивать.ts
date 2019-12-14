import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помалкивать: PerfectVerb = {
  name: Word('помалкивать', 3),
  singular1stPerson: Word('помалкиваю', 3),
  singular2ndPerson: Word('помалкиваешь', 3),
  singular3rdPerson: Word('помалкивает', 3),
  plural1stPerson: Word('помалкиваем', 3),
  plural2ndPerson: Word('помалкиваете', 3),
  plural3rdPerson: Word('помалкивают', 3),
  masculinePast: Word('помалкивал', 3),
  femininePast: Word('помалкивала', 3),
  neuterPast: Word('помалкивало', 3),
  pluralPast: Word('помалкивали', 3),
  imperativeInformal: Word('помалкивай', 3),
  imperativeFormal: Word('помалкивайте', 3),
  imperfect: [],
};

perfectVerbs.set(помалкивать.name.text, помалкивать);

export { помалкивать };