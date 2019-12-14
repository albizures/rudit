import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const программировать: PerfectVerb = {
  name: Word('программировать', 8),
  singular1stPerson: Word('программирую', 8),
  singular2ndPerson: Word('программируешь', 8),
  singular3rdPerson: Word('программирует', 8),
  plural1stPerson: Word('программируем', 8),
  plural2ndPerson: Word('программируете', 8),
  plural3rdPerson: Word('программируют', 8),
  masculinePast: Word('программировал', 8),
  femininePast: Word('программировала', 8),
  neuterPast: Word('программировало', 8),
  pluralPast: Word('программировали', 8),
  imperativeInformal: Word('программируй', 8),
  imperativeFormal: Word('программируйте', 8),
  imperfect: [],
};

perfectVerbs.set(программировать.name.text, программировать);

export { программировать };