import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спроектировать: PerfectVerb = {
  name: Word('спроектировать', 7),
  singular1stPerson: Word('спроектирую', 7),
  singular2ndPerson: Word('спроектируешь', 7),
  singular3rdPerson: Word('спроектирует', 7),
  plural1stPerson: Word('спроектируем', 7),
  plural2ndPerson: Word('спроектируете', 7),
  plural3rdPerson: Word('спроектируют', 7),
  masculinePast: Word('спроектировал', 7),
  femininePast: Word('спроектировала', 7),
  neuterPast: Word('спроектировало', 7),
  pluralPast: Word('спроектировали', 7),
  imperativeInformal: Word('спроектируй', 7),
  imperativeFormal: Word('спроектируйте', 7),
  imperfect: [],
};

perfectVerbs.set(спроектировать.name.text, спроектировать);

export { спроектировать };