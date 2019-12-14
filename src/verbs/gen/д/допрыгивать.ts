import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допрыгивать: PerfectVerb = {
  name: Word('допрыгивать', 4),
  singular1stPerson: Word('допрыгиваю', 4),
  singular2ndPerson: Word('допрыгиваешь', 4),
  singular3rdPerson: Word('допрыгивает', 4),
  plural1stPerson: Word('допрыгиваем', 4),
  plural2ndPerson: Word('допрыгиваете', 4),
  plural3rdPerson: Word('допрыгивают', 4),
  masculinePast: Word('допрыгивал', 4),
  femininePast: Word('допрыгивала', 4),
  neuterPast: Word('допрыгивало', 4),
  pluralPast: Word('допрыгивали', 4),
  imperativeInformal: Word('допрыгивай', 4),
  imperativeFormal: Word('допрыгивайте', 4),
  imperfect: [],
};

perfectVerbs.set(допрыгивать.name.text, допрыгивать);

export { допрыгивать };