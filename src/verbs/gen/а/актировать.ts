import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const актировать: PerfectVerb = {
  name: Word('актировать', 3),
  singular1stPerson: Word('актирую', 3),
  singular2ndPerson: Word('актируешь', 3),
  singular3rdPerson: Word('актирует', 3),
  plural1stPerson: Word('актируем', 3),
  plural2ndPerson: Word('актируете', 3),
  plural3rdPerson: Word('актируют', 3),
  masculinePast: Word('актировал', 3),
  femininePast: Word('актировала', 3),
  neuterPast: Word('актировало', 3),
  pluralPast: Word('актировали', 3),
  imperativeInformal: Word('актируй', 3),
  imperativeFormal: Word('актируйте', 3),
  imperfect: [],
};

perfectVerbs.set(актировать.name.text, актировать);

export { актировать };