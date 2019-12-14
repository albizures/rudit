import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впрыгивать: PerfectVerb = {
  name: Word('впрыгивать', 3),
  singular1stPerson: Word('впрыгиваю', 3),
  singular2ndPerson: Word('впрыгиваешь', 3),
  singular3rdPerson: Word('впрыгивает', 3),
  plural1stPerson: Word('впрыгиваем', 3),
  plural2ndPerson: Word('впрыгиваете', 3),
  plural3rdPerson: Word('впрыгивают', 3),
  masculinePast: Word('впрыгивал', 3),
  femininePast: Word('впрыгивала', 3),
  neuterPast: Word('впрыгивало', 3),
  pluralPast: Word('впрыгивали', 3),
  imperativeInformal: Word('впрыгивай', 3),
  imperativeFormal: Word('впрыгивайте', 3),
  imperfect: [],
};

perfectVerbs.set(впрыгивать.name.text, впрыгивать);

export { впрыгивать };