import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отреагировать: PerfectVerb = {
  name: Word('отреагировать', 6),
  singular1stPerson: Word('отреагирую', 6),
  singular2ndPerson: Word('отреагируешь', 6),
  singular3rdPerson: Word('отреагирует', 6),
  plural1stPerson: Word('отреагируем', 6),
  plural2ndPerson: Word('отреагируете', 6),
  plural3rdPerson: Word('отреагируют', 6),
  masculinePast: Word('отреагировал', 6),
  femininePast: Word('отреагировала', 6),
  neuterPast: Word('отреагировало', 6),
  pluralPast: Word('отреагировали', 6),
  imperativeInformal: Word('отреагируй', 6),
  imperativeFormal: Word('отреагируйте', 6),
  imperfect: [],
};

perfectVerbs.set(отреагировать.name.text, отреагировать);

export { отреагировать };