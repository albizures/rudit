import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const буксировать: PerfectVerb = {
  name: Word('буксировать', 4),
  singular1stPerson: Word('буксирую', 4),
  singular2ndPerson: Word('буксируешь', 4),
  singular3rdPerson: Word('буксирует', 4),
  plural1stPerson: Word('буксируем', 4),
  plural2ndPerson: Word('буксируете', 4),
  plural3rdPerson: Word('буксируют', 4),
  masculinePast: Word('буксировал', 4),
  femininePast: Word('буксировала', 4),
  neuterPast: Word('буксировало', 4),
  pluralPast: Word('буксировали', 4),
  imperativeInformal: Word('буксируй', 4),
  imperativeFormal: Word('буксируйте', 4),
  imperfect: [],
};

perfectVerbs.set(буксировать.name.text, буксировать);

export { буксировать };