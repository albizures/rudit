import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const анодировать: PerfectVerb = {
  name: Word('анодировать', 4),
  singular1stPerson: Word('анодирую', 4),
  singular2ndPerson: Word('анодируешь', 4),
  singular3rdPerson: Word('анодирует', 4),
  plural1stPerson: Word('анодируем', 4),
  plural2ndPerson: Word('анодируете', 4),
  plural3rdPerson: Word('анодируют', 4),
  masculinePast: Word('анодировал', 4),
  femininePast: Word('анодировала', 4),
  neuterPast: Word('анодировало', 4),
  pluralPast: Word('анодировали', 4),
  imperativeInformal: Word('анодируй', 4),
  imperativeFormal: Word('анодируйте', 4),
  imperfect: [],
};

perfectVerbs.set(анодировать.name.text, анодировать);

export { анодировать };