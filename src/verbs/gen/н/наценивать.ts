import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наценивать: PerfectVerb = {
  name: Word('наценивать', 3),
  singular1stPerson: Word('нацениваю', 3),
  singular2ndPerson: Word('нацениваешь', 3),
  singular3rdPerson: Word('наценивает', 3),
  plural1stPerson: Word('нацениваем', 3),
  plural2ndPerson: Word('нацениваете', 3),
  plural3rdPerson: Word('наценивают', 3),
  masculinePast: Word('наценивал', 3),
  femininePast: Word('наценивала', 3),
  neuterPast: Word('наценивало', 3),
  pluralPast: Word('наценивали', 3),
  imperativeInformal: Word('наценивай', 3),
  imperativeFormal: Word('наценивайте', 3),
  imperfect: [],
};

perfectVerbs.set(наценивать.name.text, наценивать);

export { наценивать };