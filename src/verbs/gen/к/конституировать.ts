import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const конституировать: PerfectVerb = {
  name: Word('конституировать', 8),
  singular1stPerson: Word('конституирую', 8),
  singular2ndPerson: Word('конституируешь', 8),
  singular3rdPerson: Word('конституирует', 8),
  plural1stPerson: Word('конституируем', 8),
  plural2ndPerson: Word('конституируете', 8),
  plural3rdPerson: Word('конституируют', 8),
  masculinePast: Word('конституировал', 8),
  femininePast: Word('конституировала', 8),
  neuterPast: Word('конституировало', 8),
  pluralPast: Word('конституировали', 8),
  imperativeInformal: Word('конституируй', 8),
  imperativeFormal: Word('конституируйте', 8),
  imperfect: [],
};

perfectVerbs.set(конституировать.name.text, конституировать);

export { конституировать };