import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доращивать: PerfectVerb = {
  name: Word('доращивать', 3),
  singular1stPerson: Word('доращиваю', 3),
  singular2ndPerson: Word('доращиваешь', 3),
  singular3rdPerson: Word('доращивает', 3),
  plural1stPerson: Word('доращиваем', 3),
  plural2ndPerson: Word('доращиваете', 3),
  plural3rdPerson: Word('доращивают', 3),
  masculinePast: Word('доращивал', 3),
  femininePast: Word('доращивала', 3),
  neuterPast: Word('доращивало', 3),
  pluralPast: Word('доращивали', 3),
  imperativeInformal: Word('доращивай', 3),
  imperativeFormal: Word('доращивайте', 3),
  imperfect: [],
};

perfectVerbs.set(доращивать.name.text, доращивать);

export { доращивать };