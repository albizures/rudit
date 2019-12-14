import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const абстрагировать: PerfectVerb = {
  name: Word('абстрагировать', 7),
  singular1stPerson: Word('абстрагирую', 7),
  singular2ndPerson: Word('абстрагируешь', 7),
  singular3rdPerson: Word('абстрагирует', 7),
  plural1stPerson: Word('абстрагируем', 7),
  plural2ndPerson: Word('абстрагируете', 7),
  plural3rdPerson: Word('абстрагируют', 7),
  masculinePast: Word('абстрагировал', 7),
  femininePast: Word('абстрагировала', 7),
  neuterPast: Word('абстрагировало', 7),
  pluralPast: Word('абстрагировали', 7),
  imperativeInformal: Word('абстрагируй', 7),
  imperativeFormal: Word('абстрагируйте', 7),
  imperfect: [],
};

perfectVerbs.set(абстрагировать.name.text, абстрагировать);

export { абстрагировать };