import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сыпануть: PerfectVerb = {
  name: Word('сыпануть', 5),
  singular1stPerson: Word('сыпану', 5),
  singular2ndPerson: Word('сыпанёшь', 3),
  singular3rdPerson: Word('сыпанёт', 3),
  plural1stPerson: Word('сыпанём', 3),
  plural2ndPerson: Word('сыпанёте', 3),
  plural3rdPerson: Word('сыпанут', 5),
  masculinePast: Word('сыпанул', 5),
  femininePast: Word('сыпанула', 5),
  neuterPast: Word('сыпануло', 5),
  pluralPast: Word('сыпанули', 5),
  imperativeInformal: Word('сыпани', 5),
  imperativeFormal: Word('сыпаните', 5),
  imperfect: [],
};

perfectVerbs.set(сыпануть.name.text, сыпануть);

export { сыпануть };