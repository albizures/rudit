import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зондировать: PerfectVerb = {
  name: Word('зондировать', 4),
  singular1stPerson: Word('зондирую', 4),
  singular2ndPerson: Word('зондируешь', 4),
  singular3rdPerson: Word('зондирует', 4),
  plural1stPerson: Word('зондируем', 4),
  plural2ndPerson: Word('зондируете', 4),
  plural3rdPerson: Word('зондируют', 4),
  masculinePast: Word('зондировал', 4),
  femininePast: Word('зондировала', 4),
  neuterPast: Word('зондировало', 4),
  pluralPast: Word('зондировали', 4),
  imperativeInformal: Word('зондируй', 4),
  imperativeFormal: Word('зондируйте', 4),
  imperfect: [],
};

perfectVerbs.set(зондировать.name.text, зондировать);

export { зондировать };