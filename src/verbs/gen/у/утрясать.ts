import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утрясать: PerfectVerb = {
  name: Word('утрясать', 5),
  singular1stPerson: Word('утрясаю', 5),
  singular2ndPerson: Word('утрясаешь', 5),
  singular3rdPerson: Word('утрясает', 5),
  plural1stPerson: Word('утрясаем', 5),
  plural2ndPerson: Word('утрясаете', 5),
  plural3rdPerson: Word('утрясают', 5),
  masculinePast: Word('утрясал', 5),
  femininePast: Word('утрясала', 5),
  neuterPast: Word('утрясало', 5),
  pluralPast: Word('утрясали', 5),
  imperativeInformal: Word('утрясай', 5),
  imperativeFormal: Word('утрясайте', 5),
  imperfect: [],
};

perfectVerbs.set(утрясать.name.text, утрясать);

export { утрясать };