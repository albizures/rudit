import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помешивать: PerfectVerb = {
  name: Word('помешивать', 3),
  singular1stPerson: Word('помешиваю', 3),
  singular2ndPerson: Word('помешиваешь', 3),
  singular3rdPerson: Word('помешивает', 3),
  plural1stPerson: Word('помешиваем', 3),
  plural2ndPerson: Word('помешиваете', 3),
  plural3rdPerson: Word('помешивают', 3),
  masculinePast: Word('помешивал', 3),
  femininePast: Word('помешивала', 3),
  neuterPast: Word('помешивало', 3),
  pluralPast: Word('помешивали', 3),
  imperativeInformal: Word('помешивай', 3),
  imperativeFormal: Word('помешивайте', 3),
  imperfect: [],
};

perfectVerbs.set(помешивать.name.text, помешивать);

export { помешивать };