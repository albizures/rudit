import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срыгивать: PerfectVerb = {
  name: Word('срыгивать', 2),
  singular1stPerson: Word('срыгиваю', 2),
  singular2ndPerson: Word('срыгиваешь', 2),
  singular3rdPerson: Word('срыгивает', 2),
  plural1stPerson: Word('срыгиваем', 2),
  plural2ndPerson: Word('срыгиваете', 2),
  plural3rdPerson: Word('срыгивают', 2),
  masculinePast: Word('срыгивал', 2),
  femininePast: Word('срыгивала', 2),
  neuterPast: Word('срыгивало', 2),
  pluralPast: Word('срыгивали', 2),
  imperativeInformal: Word('срыгивай', 2),
  imperativeFormal: Word('срыгивайте', 2),
  imperfect: [],
};

perfectVerbs.set(срыгивать.name.text, срыгивать);

export { срыгивать };