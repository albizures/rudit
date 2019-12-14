import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превалировать: PerfectVerb = {
  name: Word('превалировать', 6),
  singular1stPerson: Word('превалирую', 6),
  singular2ndPerson: Word('превалируешь', 6),
  singular3rdPerson: Word('превалирует', 6),
  plural1stPerson: Word('превалируем', 6),
  plural2ndPerson: Word('превалируете', 6),
  plural3rdPerson: Word('превалируют', 6),
  masculinePast: Word('превалировал', 6),
  femininePast: Word('превалировала', 6),
  neuterPast: Word('превалировало', 6),
  pluralPast: Word('превалировали', 6),
  imperativeInformal: Word('превалируй', 6),
  imperativeFormal: Word('превалируйте', 6),
  imperfect: [],
};

perfectVerbs.set(превалировать.name.text, превалировать);

export { превалировать };