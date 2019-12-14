import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпрыгивать: PerfectVerb = {
  name: Word('выпрыгивать', 4),
  singular1stPerson: Word('выпрыгиваю', 4),
  singular2ndPerson: Word('выпрыгиваешь', 4),
  singular3rdPerson: Word('выпрыгивает', 4),
  plural1stPerson: Word('выпрыгиваем', 4),
  plural2ndPerson: Word('выпрыгиваете', 4),
  plural3rdPerson: Word('выпрыгивают', 4),
  masculinePast: Word('выпрыгивал', 4),
  femininePast: Word('выпрыгивала', 4),
  neuterPast: Word('выпрыгивало', 4),
  pluralPast: Word('выпрыгивали', 4),
  imperativeInformal: Word('выпрыгивай', 4),
  imperativeFormal: Word('выпрыгивайте', 4),
  imperfect: [],
};

perfectVerbs.set(выпрыгивать.name.text, выпрыгивать);

export { выпрыгивать };