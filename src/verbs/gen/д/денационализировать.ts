import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const денационализировать: PerfectVerb = {
  name: Word('денационализировать', 12),
  singular1stPerson: Word('денационализирую', 12),
  singular2ndPerson: Word('денационализируешь', 12),
  singular3rdPerson: Word('денационализирует', 12),
  plural1stPerson: Word('денационализируем', 12),
  plural2ndPerson: Word('денационализируете', 12),
  plural3rdPerson: Word('денационализируют', 12),
  masculinePast: Word('денационализировал', 12),
  femininePast: Word('денационализировала', 12),
  neuterPast: Word('денационализировало', 12),
  pluralPast: Word('денационализировали', 12),
  imperativeInformal: Word('денационализируй', 12),
  imperativeFormal: Word('денационализируйте', 12),
  imperfect: [],
};

perfectVerbs.set(денационализировать.name.text, денационализировать);

export { денационализировать };