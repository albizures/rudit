import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const имитировать: PerfectVerb = {
  name: Word('имитировать', 4),
  singular1stPerson: Word('имитирую', 4),
  singular2ndPerson: Word('имитируешь', 4),
  singular3rdPerson: Word('имитирует', 4),
  plural1stPerson: Word('имитируем', 4),
  plural2ndPerson: Word('имитируете', 4),
  plural3rdPerson: Word('имитируют', 4),
  masculinePast: Word('имитировал', 4),
  femininePast: Word('имитировала', 4),
  neuterPast: Word('имитировало', 4),
  pluralPast: Word('имитировали', 4),
  imperativeInformal: Word('имитируй', 4),
  imperativeFormal: Word('имитируйте', 4),
  imperfect: [],
};

perfectVerbs.set(имитировать.name.text, имитировать);

export { имитировать };