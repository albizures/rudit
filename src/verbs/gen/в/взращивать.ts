import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взращивать: PerfectVerb = {
  name: Word('взращивать', 3),
  singular1stPerson: Word('взращиваю', 3),
  singular2ndPerson: Word('взращиваешь', 3),
  singular3rdPerson: Word('взращивает', 3),
  plural1stPerson: Word('взращиваем', 3),
  plural2ndPerson: Word('взращиваете', 3),
  plural3rdPerson: Word('взращивают', 3),
  masculinePast: Word('взращивал', 3),
  femininePast: Word('взращивала', 3),
  neuterPast: Word('взращивало', 3),
  pluralPast: Word('взращивали', 3),
  imperativeInformal: Word('взращивай', 3),
  imperativeFormal: Word('взращивайте', 3),
  imperfect: [],
};

perfectVerbs.set(взращивать.name.text, взращивать);

export { взращивать };