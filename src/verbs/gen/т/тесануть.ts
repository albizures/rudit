import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тесануть: PerfectVerb = {
  name: Word('тесануть', 5),
  singular1stPerson: Word('тесану', 5),
  singular2ndPerson: Word('тесанёшь', 5),
  singular3rdPerson: Word('тесанёт', 5),
  plural1stPerson: Word('тесанём', 5),
  plural2ndPerson: Word('тесанёте', 5),
  plural3rdPerson: Word('тесанут', 5),
  masculinePast: Word('тесанул', 5),
  femininePast: Word('тесанула', 5),
  neuterPast: Word('тесануло', 5),
  pluralPast: Word('тесанули', 5),
  imperativeInformal: Word('тесани', 5),
  imperativeFormal: Word('тесаните', 5),
  imperfect: [],
};

perfectVerbs.set(тесануть.name.text, тесануть);

export { тесануть };