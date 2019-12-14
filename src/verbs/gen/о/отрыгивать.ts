import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрыгивать: PerfectVerb = {
  name: Word('отрыгивать', 3),
  singular1stPerson: Word('отрыгиваю', 3),
  singular2ndPerson: Word('отрыгиваешь', 3),
  singular3rdPerson: Word('отрыгивает', 3),
  plural1stPerson: Word('отрыгиваем', 3),
  plural2ndPerson: Word('отрыгиваете', 3),
  plural3rdPerson: Word('отрыгивают', 3),
  masculinePast: Word('отрыгивал', 3),
  femininePast: Word('отрыгивала', 3),
  neuterPast: Word('отрыгивало', 3),
  pluralPast: Word('отрыгивали', 3),
  imperativeInformal: Word('отрыгивай', 3),
  imperativeFormal: Word('отрыгивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отрыгивать.name.text, отрыгивать);

export { отрыгивать };