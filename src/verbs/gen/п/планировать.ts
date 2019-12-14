import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const планировать: PerfectVerb = {
  name: Word('планировать', 8),
  singular1stPerson: Word('планирую', 6),
  singular2ndPerson: Word('планируешь', 6),
  singular3rdPerson: Word('планирует', 6),
  plural1stPerson: Word('планируем', 6),
  plural2ndPerson: Word('планируете', 6),
  plural3rdPerson: Word('планируют', 6),
  masculinePast: Word('планировал', 8),
  femininePast: Word('планировала', 8),
  neuterPast: Word('планировало', 8),
  pluralPast: Word('планировали', 8),
  imperativeInformal: Word('планируй', 6),
  imperativeFormal: Word('планируйте', 6),
  imperfect: [],
};

perfectVerbs.set(планировать.name.text, планировать);

export { планировать };