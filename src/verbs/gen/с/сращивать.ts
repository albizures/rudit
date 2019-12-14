import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сращивать: PerfectVerb = {
  name: Word('сращивать', 2),
  singular1stPerson: Word('сращиваю', 2),
  singular2ndPerson: Word('сращиваешь', 2),
  singular3rdPerson: Word('сращивает', 2),
  plural1stPerson: Word('сращиваем', 2),
  plural2ndPerson: Word('сращиваете', 2),
  plural3rdPerson: Word('сращивают', 2),
  masculinePast: Word('сращивал', 2),
  femininePast: Word('сращивала', 2),
  neuterPast: Word('сращивало', 2),
  pluralPast: Word('сращивали', 2),
  imperativeInformal: Word('сращивай', 2),
  imperativeFormal: Word('сращивайте', 2),
  imperfect: [],
};

perfectVerbs.set(сращивать.name.text, сращивать);

export { сращивать };