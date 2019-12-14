import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примешивать: PerfectVerb = {
  name: Word('примешивать', 4),
  singular1stPerson: Word('примешиваю', 4),
  singular2ndPerson: Word('примешиваешь', 4),
  singular3rdPerson: Word('примешивает', 4),
  plural1stPerson: Word('примешиваем', 4),
  plural2ndPerson: Word('примешиваете', 4),
  plural3rdPerson: Word('примешивают', 4),
  masculinePast: Word('примешивал', 4),
  femininePast: Word('примешивала', 4),
  neuterPast: Word('примешивало', 4),
  pluralPast: Word('примешивали', 4),
  imperativeInformal: Word('примешивай', 4),
  imperativeFormal: Word('примешивайте', 4),
  imperfect: [],
};

perfectVerbs.set(примешивать.name.text, примешивать);

export { примешивать };