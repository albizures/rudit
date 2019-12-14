import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отращивать: PerfectVerb = {
  name: Word('отращивать', 3),
  singular1stPerson: Word('отращиваю', 3),
  singular2ndPerson: Word('отращиваешь', 3),
  singular3rdPerson: Word('отращивает', 3),
  plural1stPerson: Word('отращиваем', 3),
  plural2ndPerson: Word('отращиваете', 3),
  plural3rdPerson: Word('отращивают', 3),
  masculinePast: Word('отращивал', 3),
  femininePast: Word('отращивала', 3),
  neuterPast: Word('отращивало', 3),
  pluralPast: Word('отращивали', 3),
  imperativeInformal: Word('отращивай', 3),
  imperativeFormal: Word('отращивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отращивать.name.text, отращивать);

export { отращивать };