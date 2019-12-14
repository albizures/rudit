import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const балансировать: PerfectVerb = {
  name: Word('балансировать', 6),
  singular1stPerson: Word('балансирую', 6),
  singular2ndPerson: Word('балансируешь', 6),
  singular3rdPerson: Word('балансирует', 6),
  plural1stPerson: Word('балансируем', 6),
  plural2ndPerson: Word('балансируете', 6),
  plural3rdPerson: Word('балансируют', 6),
  masculinePast: Word('балансировал', 6),
  femininePast: Word('балансировала', 6),
  neuterPast: Word('балансировало', 6),
  pluralPast: Word('балансировали', 6),
  imperativeInformal: Word('балансируй', 6),
  imperativeFormal: Word('балансируйте', 6),
  imperfect: [],
};

perfectVerbs.set(балансировать.name.text, балансировать);

export { балансировать };