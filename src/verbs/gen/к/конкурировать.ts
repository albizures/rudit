import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const конкурировать: PerfectVerb = {
  name: Word('конкурировать', 6),
  singular1stPerson: Word('конкурирую', 6),
  singular2ndPerson: Word('конкурируешь', 6),
  singular3rdPerson: Word('конкурирует', 6),
  plural1stPerson: Word('конкурируем', 6),
  plural2ndPerson: Word('конкурируете', 6),
  plural3rdPerson: Word('конкурируют', 6),
  masculinePast: Word('конкурировал', 6),
  femininePast: Word('конкурировала', 6),
  neuterPast: Word('конкурировало', 6),
  pluralPast: Word('конкурировали', 6),
  imperativeInformal: Word('конкурируй', 6),
  imperativeFormal: Word('конкурируйте', 6),
  imperfect: [],
};

perfectVerbs.set(конкурировать.name.text, конкурировать);

export { конкурировать };