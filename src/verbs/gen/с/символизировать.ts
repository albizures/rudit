import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const символизировать: PerfectVerb = {
  name: Word('символизировать', 8),
  singular1stPerson: Word('символизирую', 8),
  singular2ndPerson: Word('символизируешь', 8),
  singular3rdPerson: Word('символизирует', 8),
  plural1stPerson: Word('символизируем', 8),
  plural2ndPerson: Word('символизируете', 8),
  plural3rdPerson: Word('символизируют', 8),
  masculinePast: Word('символизировал', 8),
  femininePast: Word('символизировала', 8),
  neuterPast: Word('символизировало', 8),
  pluralPast: Word('символизировали', 8),
  imperativeInformal: Word('символизируй', 8),
  imperativeFormal: Word('символизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(символизировать.name.text, символизировать);

export { символизировать };