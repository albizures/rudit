import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гипнотизировать: PerfectVerb = {
  name: Word('гипнотизировать', 8),
  singular1stPerson: Word('гипнотизирую', 8),
  singular2ndPerson: Word('гипнотизируешь', 8),
  singular3rdPerson: Word('гипнотизирует', 8),
  plural1stPerson: Word('гипнотизируем', 8),
  plural2ndPerson: Word('гипнотизируете', 8),
  plural3rdPerson: Word('гипнотизируют', 8),
  masculinePast: Word('гипнотизировал', 8),
  femininePast: Word('гипнотизировала', 8),
  neuterPast: Word('гипнотизировало', 8),
  pluralPast: Word('гипнотизировали', 8),
  imperativeInformal: Word('гипнотизируй', 8),
  imperativeFormal: Word('гипнотизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(гипнотизировать.name.text, гипнотизировать);

export { гипнотизировать };