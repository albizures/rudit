import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обласкать: PerfectVerb = {
  name: Word('обласкать', 6),
  singular1stPerson: Word('обласкаю', 6),
  singular2ndPerson: Word('обласкаешь', 6),
  singular3rdPerson: Word('обласкает', 6),
  plural1stPerson: Word('обласкаем', 6),
  plural2ndPerson: Word('обласкаете', 6),
  plural3rdPerson: Word('обласкают', 6),
  masculinePast: Word('обласкал', 6),
  femininePast: Word('обласкала', 6),
  neuterPast: Word('обласкало', 6),
  pluralPast: Word('обласкали', 6),
  imperativeInformal: Word('обласкай', 6),
  imperativeFormal: Word('обласкайте', 6),
  imperfect: [],
};

perfectVerbs.set(обласкать.name.text, обласкать);

export { обласкать };