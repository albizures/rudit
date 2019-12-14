import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const металлизировать: PerfectVerb = {
  name: Word('металлизировать', 8),
  singular1stPerson: Word('металлизирую', 8),
  singular2ndPerson: Word('металлизируешь', 8),
  singular3rdPerson: Word('металлизирует', 8),
  plural1stPerson: Word('металлизируем', 8),
  plural2ndPerson: Word('металлизируете', 8),
  plural3rdPerson: Word('металлизируют', 8),
  masculinePast: Word('металлизировал', 8),
  femininePast: Word('металлизировала', 8),
  neuterPast: Word('металлизировало', 8),
  pluralPast: Word('металлизировали', 8),
  imperativeInformal: Word('металлизируй', 8),
  imperativeFormal: Word('металлизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(металлизировать.name.text, металлизировать);

export { металлизировать };