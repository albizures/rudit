import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гармонизировать: PerfectVerb = {
  name: Word('гармонизировать', 8),
  singular1stPerson: Word('гармонизирую', 8),
  singular2ndPerson: Word('гармонизируешь', 8),
  singular3rdPerson: Word('гармонизирует', 8),
  plural1stPerson: Word('гармонизируем', 8),
  plural2ndPerson: Word('гармонизируете', 8),
  plural3rdPerson: Word('гармонизируют', 8),
  masculinePast: Word('гармонизировал', 8),
  femininePast: Word('гармонизировала', 8),
  neuterPast: Word('гармонизировало', 8),
  pluralPast: Word('гармонизировали', 8),
  imperativeInformal: Word('гармонизируй', 8),
  imperativeFormal: Word('гармонизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(гармонизировать.name.text, гармонизировать);

export { гармонизировать };