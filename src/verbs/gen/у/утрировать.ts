import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утрировать: PerfectVerb = {
  name: Word('утрировать', 3),
  singular1stPerson: Word('утрирую', 3),
  singular2ndPerson: Word('утрируешь', 3),
  singular3rdPerson: Word('утрирует', 3),
  plural1stPerson: Word('утрируем', 3),
  plural2ndPerson: Word('утрируете', 3),
  plural3rdPerson: Word('утрируют', 3),
  masculinePast: Word('утрировал', 3),
  femininePast: Word('утрировала', 3),
  neuterPast: Word('утрировало', 3),
  pluralPast: Word('утрировали', 3),
  imperativeInformal: Word('утрируй', 3),
  imperativeFormal: Word('утрируйте', 3),
  imperfect: [],
};

perfectVerbs.set(утрировать.name.text, утрировать);

export { утрировать };