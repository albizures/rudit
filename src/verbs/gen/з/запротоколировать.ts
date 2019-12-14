import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запротоколировать: PerfectVerb = {
  name: Word('запротоколировать', 10),
  singular1stPerson: Word('запротоколирую', 10),
  singular2ndPerson: Word('запротоколируешь', 10),
  singular3rdPerson: Word('запротоколирует', 10),
  plural1stPerson: Word('запротоколируем', 10),
  plural2ndPerson: Word('запротоколируете', 10),
  plural3rdPerson: Word('запротоколируют', 10),
  masculinePast: Word('запротоколировал', 10),
  femininePast: Word('запротоколировала', 10),
  neuterPast: Word('запротоколировало', 10),
  pluralPast: Word('запротоколировали', 10),
  imperativeInformal: Word('запротоколируй', 10),
  imperativeFormal: Word('запротоколируйте', 10),
  imperfect: [],
};

perfectVerbs.set(запротоколировать.name.text, запротоколировать);

export { запротоколировать };