import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шибануть: PerfectVerb = {
  name: Word('шибануть', 5),
  singular1stPerson: Word('шибану', 5),
  singular2ndPerson: Word('шибанёшь', 5),
  singular3rdPerson: Word('шибанёт', 5),
  plural1stPerson: Word('шибанём', 5),
  plural2ndPerson: Word('шибанёте', 5),
  plural3rdPerson: Word('шибанут', 5),
  masculinePast: Word('шибанул', 5),
  femininePast: Word('шибанула', 5),
  neuterPast: Word('шибануло', 5),
  pluralPast: Word('шибанули', 5),
  imperativeInformal: Word('шибани', 5),
  imperativeFormal: Word('шибаните', 5),
  imperfect: [],
};

perfectVerbs.set(шибануть.name.text, шибануть);

export { шибануть };