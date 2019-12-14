import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брыкать: PerfectVerb = {
  name: Word('брыкать', 4),
  singular1stPerson: Word('брыкаю', 4),
  singular2ndPerson: Word('брыкаешь', 4),
  singular3rdPerson: Word('брыкает', 4),
  plural1stPerson: Word('брыкаем', 4),
  plural2ndPerson: Word('брыкаете', 4),
  plural3rdPerson: Word('брыкают', 4),
  masculinePast: Word('брыкал', 4),
  femininePast: Word('брыкала', 4),
  neuterPast: Word('брыкало', 4),
  pluralPast: Word('брыкали', 4),
  imperativeInformal: Word('брыкай', 4),
  imperativeFormal: Word('брыкайте', 4),
  imperfect: [],
};

perfectVerbs.set(брыкать.name.text, брыкать);

export { брыкать };