import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приращивать: PerfectVerb = {
  name: Word('приращивать', 4),
  singular1stPerson: Word('приращиваю', 4),
  singular2ndPerson: Word('приращиваешь', 4),
  singular3rdPerson: Word('приращивает', 4),
  plural1stPerson: Word('приращиваем', 4),
  plural2ndPerson: Word('приращиваете', 4),
  plural3rdPerson: Word('приращивают', 4),
  masculinePast: Word('приращивал', 4),
  femininePast: Word('приращивала', 4),
  neuterPast: Word('приращивало', 4),
  pluralPast: Word('приращивали', 4),
  imperativeInformal: Word('приращивай', 4),
  imperativeFormal: Word('приращивайте', 4),
  imperfect: [],
};

perfectVerbs.set(приращивать.name.text, приращивать);

export { приращивать };