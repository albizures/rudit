import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поаплодировать: PerfectVerb = {
  name: Word('поаплодировать', 7),
  singular1stPerson: Word('поаплодирую', 7),
  singular2ndPerson: Word('поаплодируешь', 7),
  singular3rdPerson: Word('поаплодирует', 7),
  plural1stPerson: Word('поаплодируем', 7),
  plural2ndPerson: Word('поаплодируете', 7),
  plural3rdPerson: Word('поаплодируют', 7),
  masculinePast: Word('поаплодировал', 7),
  femininePast: Word('поаплодировала', 7),
  neuterPast: Word('поаплодировало', 7),
  pluralPast: Word('поаплодировали', 7),
  imperativeInformal: Word('поаплодируй', 7),
  imperativeFormal: Word('поаплодируйте', 7),
  imperfect: [],
};

perfectVerbs.set(поаплодировать.name.text, поаплодировать);

export { поаплодировать };