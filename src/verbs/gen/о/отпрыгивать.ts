import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпрыгивать: PerfectVerb = {
  name: Word('отпрыгивать', 4),
  singular1stPerson: Word('отпрыгиваю', 4),
  singular2ndPerson: Word('отпрыгиваешь', 4),
  singular3rdPerson: Word('отпрыгивает', 4),
  plural1stPerson: Word('отпрыгиваем', 4),
  plural2ndPerson: Word('отпрыгиваете', 4),
  plural3rdPerson: Word('отпрыгивают', 4),
  masculinePast: Word('отпрыгивал', 4),
  femininePast: Word('отпрыгивала', 4),
  neuterPast: Word('отпрыгивало', 4),
  pluralPast: Word('отпрыгивали', 4),
  imperativeInformal: Word('отпрыгивай', 4),
  imperativeFormal: Word('отпрыгивайте', 4),
  imperfect: [],
};

perfectVerbs.set(отпрыгивать.name.text, отпрыгивать);

export { отпрыгивать };