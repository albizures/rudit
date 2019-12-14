import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добивать: PerfectVerb = {
  name: Word('добивать', 5),
  singular1stPerson: Word('добиваю', 5),
  singular2ndPerson: Word('добиваешь', 5),
  singular3rdPerson: Word('добивает', 5),
  plural1stPerson: Word('добиваем', 5),
  plural2ndPerson: Word('добиваете', 5),
  plural3rdPerson: Word('добивают', 5),
  masculinePast: Word('добивал', 5),
  femininePast: Word('добивала', 5),
  neuterPast: Word('добивало', 5),
  pluralPast: Word('добивали', 5),
  imperativeInformal: Word('добивай', 5),
  imperativeFormal: Word('добивайте', 5),
  imperfect: [],
};

perfectVerbs.set(добивать.name.text, добивать);

export { добивать };