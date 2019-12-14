import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const комбинировать: PerfectVerb = {
  name: Word('комбинировать', 6),
  singular1stPerson: Word('комбинирую', 6),
  singular2ndPerson: Word('комбинируешь', 6),
  singular3rdPerson: Word('комбинирует', 6),
  plural1stPerson: Word('комбинируем', 6),
  plural2ndPerson: Word('комбинируете', 6),
  plural3rdPerson: Word('комбинируют', 6),
  masculinePast: Word('комбинировал', 6),
  femininePast: Word('комбинировала', 6),
  neuterPast: Word('комбинировало', 6),
  pluralPast: Word('комбинировали', 6),
  imperativeInformal: Word('комбинируй', 6),
  imperativeFormal: Word('комбинируйте', 6),
  imperfect: [],
};

perfectVerbs.set(комбинировать.name.text, комбинировать);

export { комбинировать };