import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окорачивать: PerfectVerb = {
  name: Word('окорачивать', 4),
  singular1stPerson: Word('окорачиваю', 4),
  singular2ndPerson: Word('окорачиваешь', 4),
  singular3rdPerson: Word('окорачивает', 4),
  plural1stPerson: Word('окорачиваем', 4),
  plural2ndPerson: Word('окорачиваете', 4),
  plural3rdPerson: Word('окорачивают', 4),
  masculinePast: Word('окорачивал', 4),
  femininePast: Word('окорачивала', 4),
  neuterPast: Word('окорачивало', 4),
  pluralPast: Word('окорачивали', 4),
  imperativeInformal: Word('окорачивай', 4),
  imperativeFormal: Word('окорачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(окорачивать.name.text, окорачивать);

export { окорачивать };