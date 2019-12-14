import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибивать: PerfectVerb = {
  name: Word('прибивать', 6),
  singular1stPerson: Word('прибиваю', 6),
  singular2ndPerson: Word('прибиваешь', 6),
  singular3rdPerson: Word('прибивает', 6),
  plural1stPerson: Word('прибиваем', 6),
  plural2ndPerson: Word('прибиваете', 6),
  plural3rdPerson: Word('прибивают', 6),
  masculinePast: Word('прибивал', 6),
  femininePast: Word('прибивала', 6),
  neuterPast: Word('прибивало', 6),
  pluralPast: Word('прибивали', 6),
  imperativeInformal: Word('прибивай', 6),
  imperativeFormal: Word('прибивайте', 6),
  imperfect: [],
};

perfectVerbs.set(прибивать.name.text, прибивать);

export { прибивать };