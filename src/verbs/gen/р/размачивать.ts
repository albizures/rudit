import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размачивать: PerfectVerb = {
  name: Word('размачивать', 4),
  singular1stPerson: Word('размачиваю', 4),
  singular2ndPerson: Word('размачиваешь', 4),
  singular3rdPerson: Word('размачивает', 4),
  plural1stPerson: Word('размачиваем', 4),
  plural2ndPerson: Word('размачиваете', 4),
  plural3rdPerson: Word('размачивают', 4),
  masculinePast: Word('размачивал', 4),
  femininePast: Word('размачивала', 4),
  neuterPast: Word('размачивало', 4),
  pluralPast: Word('размачивали', 4),
  imperativeInformal: Word('размачивай', 4),
  imperativeFormal: Word('размачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(размачивать.name.text, размачивать);

export { размачивать };