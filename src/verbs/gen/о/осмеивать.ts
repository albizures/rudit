import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осмеивать: PerfectVerb = {
  name: Word('осмеивать', 3),
  singular1stPerson: Word('осмеиваю', 3),
  singular2ndPerson: Word('осмеиваешь', 3),
  singular3rdPerson: Word('осмеивает', 3),
  plural1stPerson: Word('осмеиваем', 3),
  plural2ndPerson: Word('осмеиваете', 3),
  plural3rdPerson: Word('осмеивают', 3),
  masculinePast: Word('осмеивал', 3),
  femininePast: Word('осмеивала', 3),
  neuterPast: Word('осмеивало', 3),
  pluralPast: Word('осмеивали', 3),
  imperativeInformal: Word('осмеивай', 3),
  imperativeFormal: Word('осмеивайте', 3),
  imperfect: [],
};

perfectVerbs.set(осмеивать.name.text, осмеивать);

export { осмеивать };