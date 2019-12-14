import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const варьировать: PerfectVerb = {
  name: Word('варьировать', 4),
  singular1stPerson: Word('варьирую', 4),
  singular2ndPerson: Word('варьируешь', 4),
  singular3rdPerson: Word('варьирует', 4),
  plural1stPerson: Word('варьируем', 4),
  plural2ndPerson: Word('варьируете', 4),
  plural3rdPerson: Word('варьируют', 4),
  masculinePast: Word('варьировал', 4),
  femininePast: Word('варьировала', 4),
  neuterPast: Word('варьировало', 4),
  pluralPast: Word('варьировали', 4),
  imperativeInformal: Word('варьируй', 4),
  imperativeFormal: Word('варьируйте', 4),
  imperfect: [],
};

perfectVerbs.set(варьировать.name.text, варьировать);

export { варьировать };