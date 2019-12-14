import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const теоретизировать: PerfectVerb = {
  name: Word('теоретизировать', 8),
  singular1stPerson: Word('теоретизирую', 8),
  singular2ndPerson: Word('теоретизируешь', 8),
  singular3rdPerson: Word('теоретизирует', 8),
  plural1stPerson: Word('теоретизируем', 8),
  plural2ndPerson: Word('теоретизируете', 8),
  plural3rdPerson: Word('теоретизируют', 8),
  masculinePast: Word('теоретизировал', 8),
  femininePast: Word('теоретизировала', 8),
  neuterPast: Word('теоретизировало', 8),
  pluralPast: Word('теоретизировали', 8),
  imperativeInformal: Word('теоретизируй', 8),
  imperativeFormal: Word('теоретизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(теоретизировать.name.text, теоретизировать);

export { теоретизировать };