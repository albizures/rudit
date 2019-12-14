import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наколачивать: PerfectVerb = {
  name: Word('наколачивать', 5),
  singular1stPerson: Word('наколачиваю', 5),
  singular2ndPerson: Word('наколачиваешь', 5),
  singular3rdPerson: Word('наколачивает', 5),
  plural1stPerson: Word('наколачиваем', 5),
  plural2ndPerson: Word('наколачиваете', 5),
  plural3rdPerson: Word('наколачивают', 5),
  masculinePast: Word('наколачивал', 5),
  femininePast: Word('наколачивала', 5),
  neuterPast: Word('наколачивало', 5),
  pluralPast: Word('наколачивали', 5),
  imperativeInformal: Word('наколачивай', 5),
  imperativeFormal: Word('наколачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(наколачивать.name.text, наколачивать);

export { наколачивать };