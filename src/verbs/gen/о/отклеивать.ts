import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отклеивать: PerfectVerb = {
  name: Word('отклеивать', 4),
  singular1stPerson: Word('отклеиваю', 4),
  singular2ndPerson: Word('отклеиваешь', 4),
  singular3rdPerson: Word('отклеивает', 4),
  plural1stPerson: Word('отклеиваем', 4),
  plural2ndPerson: Word('отклеиваете', 4),
  plural3rdPerson: Word('отклеивают', 4),
  masculinePast: Word('отклеивал', 4),
  femininePast: Word('отклеивала', 4),
  neuterPast: Word('отклеивало', 4),
  pluralPast: Word('отклеивали', 4),
  imperativeInformal: Word('отклеивай', 4),
  imperativeFormal: Word('отклеивайте', 4),
  imperfect: [],
};

perfectVerbs.set(отклеивать.name.text, отклеивать);

export { отклеивать };