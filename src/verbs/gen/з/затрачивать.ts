import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затрачивать: PerfectVerb = {
  name: Word('затрачивать', 4),
  singular1stPerson: Word('затрачиваю', 4),
  singular2ndPerson: Word('затрачиваешь', 4),
  singular3rdPerson: Word('затрачивает', 4),
  plural1stPerson: Word('затрачиваем', 4),
  plural2ndPerson: Word('затрачиваете', 4),
  plural3rdPerson: Word('затрачивают', 4),
  masculinePast: Word('затрачивал', 4),
  femininePast: Word('затрачивала', 4),
  neuterPast: Word('затрачивало', 4),
  pluralPast: Word('затрачивали', 4),
  imperativeInformal: Word('затрачивай', 4),
  imperativeFormal: Word('затрачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(затрачивать.name.text, затрачивать);

export { затрачивать };