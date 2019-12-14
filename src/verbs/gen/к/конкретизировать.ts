import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const конкретизировать: PerfectVerb = {
  name: Word('конкретизировать', 9),
  singular1stPerson: Word('конкретизирую', 9),
  singular2ndPerson: Word('конкретизируешь', 9),
  singular3rdPerson: Word('конкретизирует', 9),
  plural1stPerson: Word('конкретизируем', 9),
  plural2ndPerson: Word('конкретизируете', 9),
  plural3rdPerson: Word('конкретизируют', 9),
  masculinePast: Word('конкретизировал', 9),
  femininePast: Word('конкретизировала', 9),
  neuterPast: Word('конкретизировало', 9),
  pluralPast: Word('конкретизировали', 9),
  imperativeInformal: Word('конкретизируй', 9),
  imperativeFormal: Word('конкретизируйте', 9),
  imperfect: [],
};

perfectVerbs.set(конкретизировать.name.text, конкретизировать);

export { конкретизировать };