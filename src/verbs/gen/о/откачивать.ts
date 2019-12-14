import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откачивать: PerfectVerb = {
  name: Word('откачивать', 3),
  singular1stPerson: Word('откачиваю', 3),
  singular2ndPerson: Word('откачиваешь', 3),
  singular3rdPerson: Word('откачивает', 3),
  plural1stPerson: Word('откачиваем', 3),
  plural2ndPerson: Word('откачиваете', 3),
  plural3rdPerson: Word('откачивают', 3),
  masculinePast: Word('откачивал', 3),
  femininePast: Word('откачивала', 3),
  neuterPast: Word('откачивало', 3),
  pluralPast: Word('откачивали', 3),
  imperativeInformal: Word('откачивай', 3),
  imperativeFormal: Word('откачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(откачивать.name.text, откачивать);

export { откачивать };