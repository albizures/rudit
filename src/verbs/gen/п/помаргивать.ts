import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помаргивать: PerfectVerb = {
  name: Word('помаргивать', 3),
  singular1stPerson: Word('помаргиваю', 3),
  singular2ndPerson: Word('помаргиваешь', 3),
  singular3rdPerson: Word('помаргивает', 3),
  plural1stPerson: Word('помаргиваем', 3),
  plural2ndPerson: Word('помаргиваете', 3),
  plural3rdPerson: Word('помаргивают', 3),
  masculinePast: Word('помаргивал', 3),
  femininePast: Word('помаргивала', 3),
  neuterPast: Word('помаргивало', 3),
  pluralPast: Word('помаргивали', 3),
  imperativeInformal: Word('помаргивай', 3),
  imperativeFormal: Word('помаргивайте', 3),
  imperfect: [],
};

perfectVerbs.set(помаргивать.name.text, помаргивать);

export { помаргивать };