import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выменивать: PerfectVerb = {
  name: Word('выменивать', 3),
  singular1stPerson: Word('вымениваю', 3),
  singular2ndPerson: Word('вымениваешь', 3),
  singular3rdPerson: Word('выменивает', 3),
  plural1stPerson: Word('вымениваем', 3),
  plural2ndPerson: Word('вымениваете', 3),
  plural3rdPerson: Word('выменивают', 3),
  masculinePast: Word('выменивал', 3),
  femininePast: Word('выменивала', 3),
  neuterPast: Word('выменивало', 3),
  pluralPast: Word('выменивали', 3),
  imperativeInformal: Word('выменивай', 3),
  imperativeFormal: Word('выменивайте', 3),
  imperfect: [],
};

perfectVerbs.set(выменивать.name.text, выменивать);

export { выменивать };