import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размешивать: PerfectVerb = {
  name: Word('размешивать', 4),
  singular1stPerson: Word('размешиваю', 4),
  singular2ndPerson: Word('размешиваешь', 4),
  singular3rdPerson: Word('размешивает', 4),
  plural1stPerson: Word('размешиваем', 4),
  plural2ndPerson: Word('размешиваете', 4),
  plural3rdPerson: Word('размешивают', 4),
  masculinePast: Word('размешивал', 4),
  femininePast: Word('размешивала', 4),
  neuterPast: Word('размешивало', 4),
  pluralPast: Word('размешивали', 4),
  imperativeInformal: Word('размешивай', 4),
  imperativeFormal: Word('размешивайте', 4),
  imperfect: [],
};

perfectVerbs.set(размешивать.name.text, размешивать);

export { размешивать };