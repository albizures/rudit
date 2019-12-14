import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размахивать: PerfectVerb = {
  name: Word('размахивать', 4),
  singular1stPerson: Word('размахиваю', 4),
  singular2ndPerson: Word('размахиваешь', 4),
  singular3rdPerson: Word('размахивает', 4),
  plural1stPerson: Word('размахиваем', 4),
  plural2ndPerson: Word('размахиваете', 4),
  plural3rdPerson: Word('размахивают', 4),
  masculinePast: Word('размахивал', 4),
  femininePast: Word('размахивала', 4),
  neuterPast: Word('размахивало', 4),
  pluralPast: Word('размахивали', 4),
  imperativeInformal: Word('размахивай', 4),
  imperativeFormal: Word('размахивайте', 4),
  imperfect: [],
};

perfectVerbs.set(размахивать.name.text, размахивать);

export { размахивать };