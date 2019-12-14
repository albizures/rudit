import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улюлюкать: PerfectVerb = {
  name: Word('улюлюкать', 4),
  singular1stPerson: Word('улюлюкаю', 4),
  singular2ndPerson: Word('улюлюкаешь', 4),
  singular3rdPerson: Word('улюлюкает', 4),
  plural1stPerson: Word('улюлюкаем', 4),
  plural2ndPerson: Word('улюлюкаете', 4),
  plural3rdPerson: Word('улюлюкают', 4),
  masculinePast: Word('улюлюкал', 4),
  femininePast: Word('улюлюкала', 4),
  neuterPast: Word('улюлюкало', 4),
  pluralPast: Word('улюлюкали', 4),
  imperativeInformal: Word('улюлюкай', 4),
  imperativeFormal: Word('улюлюкайте', 4),
  imperfect: [],
};

perfectVerbs.set(улюлюкать.name.text, улюлюкать);

export { улюлюкать };