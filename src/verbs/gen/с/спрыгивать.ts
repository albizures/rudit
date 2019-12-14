import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрыгивать: PerfectVerb = {
  name: Word('спрыгивать', 3),
  singular1stPerson: Word('спрыгиваю', 3),
  singular2ndPerson: Word('спрыгиваешь', 3),
  singular3rdPerson: Word('спрыгивает', 3),
  plural1stPerson: Word('спрыгиваем', 3),
  plural2ndPerson: Word('спрыгиваете', 3),
  plural3rdPerson: Word('спрыгивают', 3),
  masculinePast: Word('спрыгивал', 3),
  femininePast: Word('спрыгивала', 3),
  neuterPast: Word('спрыгивало', 3),
  pluralPast: Word('спрыгивали', 3),
  imperativeInformal: Word('спрыгивай', 3),
  imperativeFormal: Word('спрыгивайте', 3),
  imperfect: [],
};

perfectVerbs.set(спрыгивать.name.text, спрыгивать);

export { спрыгивать };