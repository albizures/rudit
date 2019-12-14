import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проращивать: PerfectVerb = {
  name: Word('проращивать', 4),
  singular1stPerson: Word('проращиваю', 4),
  singular2ndPerson: Word('проращиваешь', 4),
  singular3rdPerson: Word('проращивает', 4),
  plural1stPerson: Word('проращиваем', 4),
  plural2ndPerson: Word('проращиваете', 4),
  plural3rdPerson: Word('проращивают', 4),
  masculinePast: Word('проращивал', 4),
  femininePast: Word('проращивала', 4),
  neuterPast: Word('проращивало', 4),
  pluralPast: Word('проращивали', 4),
  imperativeInformal: Word('проращивай', 4),
  imperativeFormal: Word('проращивайте', 4),
  imperfect: [],
};

perfectVerbs.set(проращивать.name.text, проращивать);

export { проращивать };