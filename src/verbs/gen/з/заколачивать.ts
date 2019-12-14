import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заколачивать: PerfectVerb = {
  name: Word('заколачивать', 5),
  singular1stPerson: Word('заколачиваю', 5),
  singular2ndPerson: Word('заколачиваешь', 5),
  singular3rdPerson: Word('заколачивает', 5),
  plural1stPerson: Word('заколачиваем', 5),
  plural2ndPerson: Word('заколачиваете', 5),
  plural3rdPerson: Word('заколачивают', 5),
  masculinePast: Word('заколачивал', 5),
  femininePast: Word('заколачивала', 5),
  neuterPast: Word('заколачивало', 5),
  pluralPast: Word('заколачивали', 5),
  imperativeInformal: Word('заколачивай', 5),
  imperativeFormal: Word('заколачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(заколачивать.name.text, заколачивать);

export { заколачивать };