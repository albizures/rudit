import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притачивать: PerfectVerb = {
  name: Word('притачивать', 4),
  singular1stPerson: Word('притачиваю', 4),
  singular2ndPerson: Word('притачиваешь', 4),
  singular3rdPerson: Word('притачивает', 4),
  plural1stPerson: Word('притачиваем', 4),
  plural2ndPerson: Word('притачиваете', 4),
  plural3rdPerson: Word('притачивают', 4),
  masculinePast: Word('притачивал', 4),
  femininePast: Word('притачивала', 4),
  neuterPast: Word('притачивало', 4),
  pluralPast: Word('притачивали', 4),
  imperativeInformal: Word('притачивай', 4),
  imperativeFormal: Word('притачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(притачивать.name.text, притачивать);

export { притачивать };