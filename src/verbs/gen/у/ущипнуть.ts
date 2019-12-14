import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ущипнуть: PerfectVerb = {
  name: Word('ущипнуть', 5),
  singular1stPerson: Word('ущипну', 5),
  singular2ndPerson: Word('ущипнёшь', 2),
  singular3rdPerson: Word('ущипнёт', 2),
  plural1stPerson: Word('ущипнём', 2),
  plural2ndPerson: Word('ущипнёте', 7),
  plural3rdPerson: Word('ущипнут', 5),
  masculinePast: Word('ущипнул', 5),
  femininePast: Word('ущипнула', 5),
  neuterPast: Word('ущипнуло', 5),
  pluralPast: Word('ущипнули', 5),
  imperativeInformal: Word('ущипни', 5),
  imperativeFormal: Word('ущипните', 5),
  imperfect: [],
};

perfectVerbs.set(ущипнуть.name.text, ущипнуть);

export { ущипнуть };