import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const канонизировать: PerfectVerb = {
  name: Word('канонизировать', 7),
  singular1stPerson: Word('канонизирую', 7),
  singular2ndPerson: Word('канонизируешь', 7),
  singular3rdPerson: Word('канонизирует', 7),
  plural1stPerson: Word('канонизируем', 7),
  plural2ndPerson: Word('канонизируете', 7),
  plural3rdPerson: Word('канонизируют', 7),
  masculinePast: Word('канонизировал', 7),
  femininePast: Word('канонизировала', 7),
  neuterPast: Word('канонизировало', 7),
  pluralPast: Word('канонизировали', 7),
  imperativeInformal: Word('канонизируй', 7),
  imperativeFormal: Word('канонизируйте', 7),
  imperfect: [],
};

perfectVerbs.set(канонизировать.name.text, канонизировать);

export { канонизировать };