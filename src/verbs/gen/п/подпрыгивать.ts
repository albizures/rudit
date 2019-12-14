import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпрыгивать: PerfectVerb = {
  name: Word('подпрыгивать', 5),
  singular1stPerson: Word('подпрыгиваю', 5),
  singular2ndPerson: Word('подпрыгиваешь', 5),
  singular3rdPerson: Word('подпрыгивает', 5),
  plural1stPerson: Word('подпрыгиваем', 5),
  plural2ndPerson: Word('подпрыгиваете', 5),
  plural3rdPerson: Word('подпрыгивают', 5),
  masculinePast: Word('подпрыгивал', 5),
  femininePast: Word('подпрыгивала', 5),
  neuterPast: Word('подпрыгивало', 5),
  pluralPast: Word('подпрыгивали', 5),
  imperativeInformal: Word('подпрыгивай', 5),
  imperativeFormal: Word('подпрыгивайте', 5),
  imperfect: [],
};

perfectVerbs.set(подпрыгивать.name.text, подпрыгивать);

export { подпрыгивать };