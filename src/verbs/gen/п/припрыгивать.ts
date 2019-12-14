import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припрыгивать: PerfectVerb = {
  name: Word('припрыгивать', 5),
  singular1stPerson: Word('припрыгиваю', 5),
  singular2ndPerson: Word('припрыгиваешь', 5),
  singular3rdPerson: Word('припрыгивает', 5),
  plural1stPerson: Word('припрыгиваем', 5),
  plural2ndPerson: Word('припрыгиваете', 5),
  plural3rdPerson: Word('припрыгивают', 5),
  masculinePast: Word('припрыгивал', 5),
  femininePast: Word('припрыгивала', 5),
  neuterPast: Word('припрыгивало', 5),
  pluralPast: Word('припрыгивали', 5),
  imperativeInformal: Word('припрыгивай', 5),
  imperativeFormal: Word('припрыгивайте', 5),
  imperfect: [],
};

perfectVerbs.set(припрыгивать.name.text, припрыгивать);

export { припрыгивать };