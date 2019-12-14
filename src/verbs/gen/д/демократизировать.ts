import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const демократизировать: PerfectVerb = {
  name: Word('демократизировать', 10),
  singular1stPerson: Word('демократизирую', 10),
  singular2ndPerson: Word('демократизируешь', 10),
  singular3rdPerson: Word('демократизирует', 10),
  plural1stPerson: Word('демократизируем', 10),
  plural2ndPerson: Word('демократизируете', 10),
  plural3rdPerson: Word('демократизируют', 10),
  masculinePast: Word('демократизировал', 10),
  femininePast: Word('демократизировала', 10),
  neuterPast: Word('демократизировало', 10),
  pluralPast: Word('демократизировали', 10),
  imperativeInformal: Word('демократизируй', 10),
  imperativeFormal: Word('демократизируйте', 10),
  imperfect: [],
};

perfectVerbs.set(демократизировать.name.text, демократизировать);

export { демократизировать };