import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошмыгивать: PerfectVerb = {
  name: Word('прошмыгивать', 5),
  singular1stPerson: Word('прошмыгиваю', 5),
  singular2ndPerson: Word('прошмыгиваешь', 5),
  singular3rdPerson: Word('прошмыгивает', 5),
  plural1stPerson: Word('прошмыгиваем', 5),
  plural2ndPerson: Word('прошмыгиваете', 5),
  plural3rdPerson: Word('прошмыгивают', 5),
  masculinePast: Word('прошмыгивал', 5),
  femininePast: Word('прошмыгивала', 5),
  neuterPast: Word('прошмыгивало', 5),
  pluralPast: Word('прошмыгивали', 5),
  imperativeInformal: Word('прошмыгивай', 5),
  imperativeFormal: Word('прошмыгивайте', 5),
  imperfect: [],
};

perfectVerbs.set(прошмыгивать.name.text, прошмыгивать);

export { прошмыгивать };