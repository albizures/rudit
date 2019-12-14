import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увивать: PerfectVerb = {
  name: Word('увивать', 4),
  singular1stPerson: Word('увиваю', 4),
  singular2ndPerson: Word('увиваешь', 4),
  singular3rdPerson: Word('увивает', 4),
  plural1stPerson: Word('увиваем', 4),
  plural2ndPerson: Word('увиваете', 4),
  plural3rdPerson: Word('увивают', 4),
  masculinePast: Word('увивал', 4),
  femininePast: Word('увивала', 4),
  neuterPast: Word('увивало', 4),
  pluralPast: Word('увивали', 4),
  imperativeInformal: Word('увивай', 4),
  imperativeFormal: Word('увивайте', 4),
  imperfect: [],
};

perfectVerbs.set(увивать.name.text, увивать);

export { увивать };