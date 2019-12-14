import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const конспектировать: PerfectVerb = {
  name: Word('конспектировать', 8),
  singular1stPerson: Word('конспектирую', 8),
  singular2ndPerson: Word('конспектируешь', 8),
  singular3rdPerson: Word('конспектирует', 8),
  plural1stPerson: Word('конспектируем', 8),
  plural2ndPerson: Word('конспектируете', 8),
  plural3rdPerson: Word('конспектируют', 8),
  masculinePast: Word('конспектировал', 8),
  femininePast: Word('конспектировала', 8),
  neuterPast: Word('конспектировало', 8),
  pluralPast: Word('конспектировали', 8),
  imperativeInformal: Word('конспектируй', 8),
  imperativeFormal: Word('конспектируйте', 8),
  imperfect: [],
};

perfectVerbs.set(конспектировать.name.text, конспектировать);

export { конспектировать };