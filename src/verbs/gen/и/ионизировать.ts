import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ионизировать: PerfectVerb = {
  name: Word('ионизировать', 5),
  singular1stPerson: Word('ионизирую', 5),
  singular2ndPerson: Word('ионизируешь', 5),
  singular3rdPerson: Word('ионизирует', 5),
  plural1stPerson: Word('ионизируем', 5),
  plural2ndPerson: Word('ионизируете', 5),
  plural3rdPerson: Word('ионизируют', 5),
  masculinePast: Word('ионизировал', 5),
  femininePast: Word('ионизировала', 5),
  neuterPast: Word('ионизировало', 5),
  pluralPast: Word('ионизировали', 5),
  imperativeInformal: Word('ионизируй', 5),
  imperativeFormal: Word('ионизируйте', 5),
  imperfect: [],
};

perfectVerbs.set(ионизировать.name.text, ионизировать);

export { ионизировать };