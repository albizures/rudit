import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застрачивать: PerfectVerb = {
  name: Word('застрачивать', 5),
  singular1stPerson: Word('застрачиваю', 5),
  singular2ndPerson: Word('застрачиваешь', 5),
  singular3rdPerson: Word('застрачивает', 5),
  plural1stPerson: Word('застрачиваем', 5),
  plural2ndPerson: Word('застрачиваете', 5),
  plural3rdPerson: Word('застрачивают', 5),
  masculinePast: Word('застрачивал', 5),
  femininePast: Word('застрачивала', 5),
  neuterPast: Word('застрачивало', 5),
  pluralPast: Word('застрачивали', 5),
  imperativeInformal: Word('застрачивай', 5),
  imperativeFormal: Word('застрачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(застрачивать.name.text, застрачивать);

export { застрачивать };