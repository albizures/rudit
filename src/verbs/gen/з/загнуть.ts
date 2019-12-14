import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загнуть: PerfectVerb = {
  name: Word('загнуть', 4),
  singular1stPerson: Word('загну', 4),
  singular2ndPerson: Word('загнёшь', 4),
  singular3rdPerson: Word('загнёт', 4),
  plural1stPerson: Word('загнём', 4),
  plural2ndPerson: Word('загнёте', 4),
  plural3rdPerson: Word('загнут', 4),
  masculinePast: Word('загнул', 4),
  femininePast: Word('загнула', 4),
  neuterPast: Word('загнуло', 4),
  pluralPast: Word('загнули', 4),
  imperativeInformal: Word('загни', 4),
  imperativeFormal: Word('загните', 4),
  imperfect: [],
};

perfectVerbs.set(загнуть.name.text, загнуть);

export { загнуть };