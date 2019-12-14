import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const славянизировать: PerfectVerb = {
  name: Word('славянизировать', 8),
  singular1stPerson: Word('славянизирую', 8),
  singular2ndPerson: Word('славянизируешь', 8),
  singular3rdPerson: Word('славянизирует', 8),
  plural1stPerson: Word('славянизируем', 8),
  plural2ndPerson: Word('славянизируете', 8),
  plural3rdPerson: Word('славянизируют', 8),
  masculinePast: Word('славянизировал', 8),
  femininePast: Word('славянизировала', 8),
  neuterPast: Word('славянизировало', 8),
  pluralPast: Word('славянизировали', 8),
  imperativeInformal: Word('славянизируй', 8),
  imperativeFormal: Word('славянизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(славянизировать.name.text, славянизировать);

export { славянизировать };