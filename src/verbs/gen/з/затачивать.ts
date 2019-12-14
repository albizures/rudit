import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затачивать: PerfectVerb = {
  name: Word('затачивать', 3),
  singular1stPerson: Word('затачиваю', 3),
  singular2ndPerson: Word('затачиваешь', 3),
  singular3rdPerson: Word('затачивает', 3),
  plural1stPerson: Word('затачиваем', 3),
  plural2ndPerson: Word('затачиваете', 3),
  plural3rdPerson: Word('затачивают', 3),
  masculinePast: Word('затачивал', 3),
  femininePast: Word('затачивала', 3),
  neuterPast: Word('затачивало', 3),
  pluralPast: Word('затачивали', 3),
  imperativeInformal: Word('затачивай', 3),
  imperativeFormal: Word('затачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(затачивать.name.text, затачивать);

export { затачивать };