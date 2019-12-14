import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реагировать: PerfectVerb = {
  name: Word('реагировать', 4),
  singular1stPerson: Word('реагирую', 4),
  singular2ndPerson: Word('реагируешь', 4),
  singular3rdPerson: Word('реагирует', 4),
  plural1stPerson: Word('реагируем', 4),
  plural2ndPerson: Word('реагируете', 4),
  plural3rdPerson: Word('реагируют', 4),
  masculinePast: Word('реагировал', 4),
  femininePast: Word('реагировала', 4),
  neuterPast: Word('реагировало', 4),
  pluralPast: Word('реагировали', 4),
  imperativeInformal: Word('реагируй', 4),
  imperativeFormal: Word('реагируйте', 4),
  imperfect: [],
};

perfectVerbs.set(реагировать.name.text, реагировать);

export { реагировать };