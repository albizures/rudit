import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспрыгивать: PerfectVerb = {
  name: Word('вспрыгивать', 4),
  singular1stPerson: Word('вспрыгиваю', 4),
  singular2ndPerson: Word('вспрыгиваешь', 4),
  singular3rdPerson: Word('вспрыгивает', 4),
  plural1stPerson: Word('вспрыгиваем', 4),
  plural2ndPerson: Word('вспрыгиваете', 4),
  plural3rdPerson: Word('вспрыгивают', 4),
  masculinePast: Word('вспрыгивал', 4),
  femininePast: Word('вспрыгивала', 4),
  neuterPast: Word('вспрыгивало', 4),
  pluralPast: Word('вспрыгивали', 4),
  imperativeInformal: Word('вспрыгивай', 4),
  imperativeFormal: Word('вспрыгивайте', 4),
  imperfect: [],
};

perfectVerbs.set(вспрыгивать.name.text, вспрыгивать);

export { вспрыгивать };