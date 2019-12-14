import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закаеивать: PerfectVerb = {
  name: Word('закаеивать', 3),
  singular1stPerson: Word('заклеиваю', 1),
  singular2ndPerson: Word('заклеиваешь', 1),
  singular3rdPerson: Word('заклеивает', 1),
  plural1stPerson: Word('заклеиваем', 1),
  plural2ndPerson: Word('заклеиваете', 1),
  plural3rdPerson: Word('заклеивают', 1),
  masculinePast: Word('заклеивал', 1),
  femininePast: Word('заклеивала', 1),
  neuterPast: Word('заклеивало', 1),
  pluralPast: Word('заклеивали', 1),
  imperativeInformal: Word('заклеивай', 1),
  imperativeFormal: Word('заклеивайте', 1),
  imperfect: [],
};

perfectVerbs.set(закаеивать.name.text, закаеивать);

export { закаеивать };