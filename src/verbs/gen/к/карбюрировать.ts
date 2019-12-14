import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const карбюрировать: PerfectVerb = {
  name: Word('карбюрировать', 6),
  singular1stPerson: Word('карбюрирую', 6),
  singular2ndPerson: Word('карбюрируешь', 6),
  singular3rdPerson: Word('карбюрирует', 6),
  plural1stPerson: Word('карбюрируем', 6),
  plural2ndPerson: Word('карбюрируете', 6),
  plural3rdPerson: Word('карбюрируют', 6),
  masculinePast: Word('карбюрировал', 6),
  femininePast: Word('карбюрировала', 6),
  neuterPast: Word('карбюрировало', 6),
  pluralPast: Word('карбюрировали', 6),
  imperativeInformal: Word('карбюрируй', 6),
  imperativeFormal: Word('карбюрируйте', 6),
  imperfect: [],
};

perfectVerbs.set(карбюрировать.name.text, карбюрировать);

export { карбюрировать };