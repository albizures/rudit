import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выращивать: PerfectVerb = {
  name: Word('выращивать', 3),
  singular1stPerson: Word('выращиваю', 3),
  singular2ndPerson: Word('выращиваешь', 3),
  singular3rdPerson: Word('выращивает', 3),
  plural1stPerson: Word('выращиваем', 3),
  plural2ndPerson: Word('выращиваете', 3),
  plural3rdPerson: Word('выращивают', 3),
  masculinePast: Word('выращивал', 3),
  femininePast: Word('выращивала', 3),
  neuterPast: Word('выращивало', 3),
  pluralPast: Word('выращивали', 3),
  imperativeInformal: Word('выращивай', 3),
  imperativeFormal: Word('выращивайте', 3),
  imperfect: ['вырастить'],
};

perfectVerbs.set(выращивать.name.text, выращивать);

export { выращивать };