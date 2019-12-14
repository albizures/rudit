import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рубануть: PerfectVerb = {
  name: Word('рубануть', 5),
  singular1stPerson: Word('рубану', 5),
  singular2ndPerson: Word('рубанёшь', 5),
  singular3rdPerson: Word('рубанёт', 5),
  plural1stPerson: Word('рубанём', 5),
  plural2ndPerson: Word('рубанёте', 5),
  plural3rdPerson: Word('рубанут', 5),
  masculinePast: Word('рубанул', 5),
  femininePast: Word('рубанула', 5),
  neuterPast: Word('рубануло', 5),
  pluralPast: Word('рубанули', 5),
  imperativeInformal: Word('рубани', 5),
  imperativeFormal: Word('рубаните', 5),
  imperfect: [],
};

perfectVerbs.set(рубануть.name.text, рубануть);

export { рубануть };