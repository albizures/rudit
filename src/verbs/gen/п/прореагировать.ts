import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прореагировать: PerfectVerb = {
  name: Word('прореагировать', 7),
  singular1stPerson: Word('прореагирую', 7),
  singular2ndPerson: Word('прореагируешь', 7),
  singular3rdPerson: Word('прореагирует', 7),
  plural1stPerson: Word('прореагируем', 7),
  plural2ndPerson: Word('прореагируете', 7),
  plural3rdPerson: Word('прореагируют', 7),
  masculinePast: Word('прореагировал', 7),
  femininePast: Word('прореагировала', 7),
  neuterPast: Word('прореагировало', 7),
  pluralPast: Word('прореагировали', 7),
  imperativeInformal: Word('прореагируй', 7),
  imperativeFormal: Word('прореагируйте', 7),
  imperfect: [],
};

perfectVerbs.set(прореагировать.name.text, прореагировать);

export { прореагировать };