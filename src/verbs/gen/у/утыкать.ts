import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утыкать: PerfectVerb = {
  name: Word('утыкать', 4),
  singular1stPerson: Word('утыкаю', 4),
  singular2ndPerson: Word('утыкаешь', 4),
  singular3rdPerson: Word('утыкает', 4),
  plural1stPerson: Word('утыкаем', 4),
  plural2ndPerson: Word('утыкаете', 4),
  plural3rdPerson: Word('утыкают', 4),
  masculinePast: Word('утыкал', 4),
  femininePast: Word('утыкала', 4),
  neuterPast: Word('утыкало', 4),
  pluralPast: Word('утыкали', 4),
  imperativeInformal: Word('утыкай', 4),
  imperativeFormal: Word('утыкайте', 4),
  imperfect: [],
};

perfectVerbs.set(утыкать.name.text, утыкать);

export { утыкать };