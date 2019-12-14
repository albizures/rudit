import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окачивать: PerfectVerb = {
  name: Word('окачивать', 2),
  singular1stPerson: Word('окачиваю', 2),
  singular2ndPerson: Word('окачиваешь', 2),
  singular3rdPerson: Word('окачивает', 2),
  plural1stPerson: Word('окачиваем', 2),
  plural2ndPerson: Word('окачиваете', 2),
  plural3rdPerson: Word('окачивают', 2),
  masculinePast: Word('окачивал', 2),
  femininePast: Word('окачивала', 2),
  neuterPast: Word('окачивало', 2),
  pluralPast: Word('окачивали', 2),
  imperativeInformal: Word('окачивай', 2),
  imperativeFormal: Word('окачивайте', 2),
  imperfect: [],
};

perfectVerbs.set(окачивать.name.text, окачивать);

export { окачивать };