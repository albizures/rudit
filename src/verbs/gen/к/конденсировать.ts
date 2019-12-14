import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const конденсировать: PerfectVerb = {
  name: Word('конденсировать', 7),
  singular1stPerson: Word('конденсирую', 7),
  singular2ndPerson: Word('конденсируешь', 7),
  singular3rdPerson: Word('конденсирует', 7),
  plural1stPerson: Word('конденсируем', 7),
  plural2ndPerson: Word('конденсируете', 7),
  plural3rdPerson: Word('конденсируют', 7),
  masculinePast: Word('конденсировал', 7),
  femininePast: Word('конденсировала', 7),
  neuterPast: Word('конденсировало', 7),
  pluralPast: Word('конденсировали', 7),
  imperativeInformal: Word('конденсируй', 7),
  imperativeFormal: Word('конденсируйте', 7),
  imperfect: [],
};

perfectVerbs.set(конденсировать.name.text, конденсировать);

export { конденсировать };