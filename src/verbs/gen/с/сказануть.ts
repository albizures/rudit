import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сказануть: PerfectVerb = {
  name: Word('сказануть', 6),
  singular1stPerson: Word('сказану', 6),
  singular2ndPerson: Word('сказанёшь', 6),
  singular3rdPerson: Word('сказанёт', 6),
  plural1stPerson: Word('сказанём', 6),
  plural2ndPerson: Word('сказанёте', 6),
  plural3rdPerson: Word('сказанут', 6),
  masculinePast: Word('сказанул', 6),
  femininePast: Word('сказанула', 6),
  neuterPast: Word('сказануло', 6),
  pluralPast: Word('сказанули', 6),
  imperativeInformal: Word('сказани', 6),
  imperativeFormal: Word('сказаните', 6),
  imperfect: [],
};

perfectVerbs.set(сказануть.name.text, сказануть);

export { сказануть };