import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спешивать: PerfectVerb = {
  name: Word('спешивать', 2),
  singular1stPerson: Word('спешиваю', 2),
  singular2ndPerson: Word('спешиваешь', 2),
  singular3rdPerson: Word('спешивает', 2),
  plural1stPerson: Word('спешиваем', 2),
  plural2ndPerson: Word('спешиваете', 2),
  plural3rdPerson: Word('спешивают', 2),
  masculinePast: Word('спешивал', 2),
  femininePast: Word('спешивала', 2),
  neuterPast: Word('спешивало', 2),
  pluralPast: Word('спешивали', 2),
  imperativeInformal: Word('спешивай', 2),
  imperativeFormal: Word('спешивайте', 2),
  imperfect: [],
};

perfectVerbs.set(спешивать.name.text, спешивать);

export { спешивать };