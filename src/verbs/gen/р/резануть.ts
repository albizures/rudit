import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const резануть: PerfectVerb = {
  name: Word('резануть', 5),
  singular1stPerson: Word('резану', 5),
  singular2ndPerson: Word('резанёшь', 3),
  singular3rdPerson: Word('резанёт', 3),
  plural1stPerson: Word('резанём', 3),
  plural2ndPerson: Word('резанёте', 3),
  plural3rdPerson: Word('резанут', 5),
  masculinePast: Word('резанул', 5),
  femininePast: Word('резанула', 5),
  neuterPast: Word('резануло', 5),
  pluralPast: Word('резанули', 5),
  imperativeInformal: Word('резани', 5),
  imperativeFormal: Word('резаните', 5),
  imperfect: [],
};

perfectVerbs.set(резануть.name.text, резануть);

export { резануть };