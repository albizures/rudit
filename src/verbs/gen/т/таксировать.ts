import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const таксировать: PerfectVerb = {
  name: Word('таксировать', 4),
  singular1stPerson: Word('таксирую', 4),
  singular2ndPerson: Word('таксируешь', 4),
  singular3rdPerson: Word('таксирует', 4),
  plural1stPerson: Word('таксируем', 4),
  plural2ndPerson: Word('таксируете', 4),
  plural3rdPerson: Word('таксируют', 4),
  masculinePast: Word('таксировал', 4),
  femininePast: Word('таксировала', 4),
  neuterPast: Word('таксировало', 4),
  pluralPast: Word('таксировали', 4),
  imperativeInformal: Word('таксируй', 4),
  imperativeFormal: Word('таксируйте', 4),
  imperfect: [],
};

perfectVerbs.set(таксировать.name.text, таксировать);

export { таксировать };