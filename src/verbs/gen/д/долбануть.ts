import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const долбануть: PerfectVerb = {
  name: Word('долбануть', 6),
  singular1stPerson: Word('долбану', 6),
  singular2ndPerson: Word('долбанёшь', 4),
  singular3rdPerson: Word('долбанёт', 4),
  plural1stPerson: Word('долбанём', 4),
  plural2ndPerson: Word('долбанёте', 4),
  plural3rdPerson: Word('долбанут', 6),
  masculinePast: Word('долбанул', 6),
  femininePast: Word('долбанула', 6),
  neuterPast: Word('долбануло', 6),
  pluralPast: Word('долбанули', 6),
  imperativeInformal: Word('долбани', 6),
  imperativeFormal: Word('долбаните', 6),
  imperfect: [],
};

perfectVerbs.set(долбануть.name.text, долбануть);

export { долбануть };