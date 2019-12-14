import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вулканизировать: PerfectVerb = {
  name: Word('вулканизировать', 8),
  singular1stPerson: Word('вулканизирую', 8),
  singular2ndPerson: Word('вулканизируешь', 8),
  singular3rdPerson: Word('вулканизирует', 8),
  plural1stPerson: Word('вулканизируем', 8),
  plural2ndPerson: Word('вулканизируете', 8),
  plural3rdPerson: Word('вулканизируют', 8),
  masculinePast: Word('вулканизировал', 8),
  femininePast: Word('вулканизировала', 8),
  neuterPast: Word('вулканизировало', 8),
  pluralPast: Word('вулканизировали', 8),
  imperativeInformal: Word('вулканизируй', 8),
  imperativeFormal: Word('вулканизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(вулканизировать.name.text, вулканизировать);

export { вулканизировать };