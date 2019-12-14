import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const орнаментировать: PerfectVerb = {
  name: Word('орнаментировать', 8),
  singular1stPerson: Word('орнаментирую', 8),
  singular2ndPerson: Word('орнаментируешь', 8),
  singular3rdPerson: Word('орнаментирует', 8),
  plural1stPerson: Word('орнаментируем', 8),
  plural2ndPerson: Word('орнаментируете', 8),
  plural3rdPerson: Word('орнаментируют', 8),
  masculinePast: Word('орнаментировал', 8),
  femininePast: Word('орнаментировала', 8),
  neuterPast: Word('орнаментировало', 8),
  pluralPast: Word('орнаментировали', 8),
  imperativeInformal: Word('орнаментируй', 8),
  imperativeFormal: Word('орнаментируйте', 8),
  imperfect: [],
};

perfectVerbs.set(орнаментировать.name.text, орнаментировать);

export { орнаментировать };