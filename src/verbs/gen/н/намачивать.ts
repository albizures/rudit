import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намачивать: PerfectVerb = {
  name: Word('намачивать', 3),
  singular1stPerson: Word('намачиваю', 3),
  singular2ndPerson: Word('намачиваешь', 3),
  singular3rdPerson: Word('намачивает', 3),
  plural1stPerson: Word('намачиваем', 3),
  plural2ndPerson: Word('намачиваете', 3),
  plural3rdPerson: Word('намачивают', 3),
  masculinePast: Word('намачивал', 3),
  femininePast: Word('намачивала', 3),
  neuterPast: Word('намачивало', 3),
  pluralPast: Word('намачивали', 3),
  imperativeInformal: Word('намачивай', 3),
  imperativeFormal: Word('намачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(намачивать.name.text, намачивать);

export { намачивать };