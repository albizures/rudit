import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загипнотизировать: PerfectVerb = {
  name: Word('загипнотизировать', 10),
  singular1stPerson: Word('загипнотизирую', 10),
  singular2ndPerson: Word('загипнотизируешь', 10),
  singular3rdPerson: Word('загипнотизирует', 10),
  plural1stPerson: Word('загипнотизируем', 10),
  plural2ndPerson: Word('загипнотизируете', 10),
  plural3rdPerson: Word('загипнотизируют', 10),
  masculinePast: Word('загипнотизировал', 10),
  femininePast: Word('загипнотизировала', 10),
  neuterPast: Word('загипнотизировало', 10),
  pluralPast: Word('загипнотизировали', 10),
  imperativeInformal: Word('загипнотизируй', 10),
  imperativeFormal: Word('загипнотизируйте', 10),
  imperfect: [],
};

perfectVerbs.set(загипнотизировать.name.text, загипнотизировать);

export { загипнотизировать };