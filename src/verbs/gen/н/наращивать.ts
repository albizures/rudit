import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наращивать: PerfectVerb = {
  name: Word('наращивать', 3),
  singular1stPerson: Word('наращиваю', 3),
  singular2ndPerson: Word('наращиваешь', 3),
  singular3rdPerson: Word('наращивает', 3),
  plural1stPerson: Word('наращиваем', 3),
  plural2ndPerson: Word('наращиваете', 3),
  plural3rdPerson: Word('наращивают', 3),
  masculinePast: Word('наращивал', 3),
  femininePast: Word('наращивала', 3),
  neuterPast: Word('наращивало', 3),
  pluralPast: Word('наращивали', 3),
  imperativeInformal: Word('наращивай', 3),
  imperativeFormal: Word('наращивайте', 3),
  imperfect: ['нарастить'],
};

perfectVerbs.set(наращивать.name.text, наращивать);

export { наращивать };