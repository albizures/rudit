import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрыгивать: PerfectVerb = {
  name: Word('запрыгивать', 4),
  singular1stPerson: Word('запрыгиваю', 4),
  singular2ndPerson: Word('запрыгиваешь', 4),
  singular3rdPerson: Word('запрыгивает', 4),
  plural1stPerson: Word('запрыгиваем', 4),
  plural2ndPerson: Word('запрыгиваете', 4),
  plural3rdPerson: Word('запрыгивают', 4),
  masculinePast: Word('запрыгивал', 4),
  femininePast: Word('запрыгивала', 4),
  neuterPast: Word('запрыгивало', 4),
  pluralPast: Word('запрыгивали', 4),
  imperativeInformal: Word('запрыгивай', 4),
  imperativeFormal: Word('запрыгивайте', 4),
  imperfect: [],
};

perfectVerbs.set(запрыгивать.name.text, запрыгивать);

export { запрыгивать };