import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const карбонизировать: PerfectVerb = {
  name: Word('карбонизировать', 8),
  singular1stPerson: Word('карбонизирую', 8),
  singular2ndPerson: Word('карбонизируешь', 8),
  singular3rdPerson: Word('карбонизирует', 8),
  plural1stPerson: Word('карбонизируем', 8),
  plural2ndPerson: Word('карбонизируете', 8),
  plural3rdPerson: Word('карбонизируют', 8),
  masculinePast: Word('карбонизировал', 8),
  femininePast: Word('карбонизировала', 8),
  neuterPast: Word('карбонизировало', 8),
  pluralPast: Word('карбонизировали', 8),
  imperativeInformal: Word('карбонизируй', 8),
  imperativeFormal: Word('карбонизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(карбонизировать.name.text, карбонизировать);

export { карбонизировать };