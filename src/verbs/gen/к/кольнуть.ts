import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кольнуть: PerfectVerb = {
  name: Word('кольнуть', 5),
  singular1stPerson: Word('кольну', 5),
  singular2ndPerson: Word('кольнёшь', 5),
  singular3rdPerson: Word('кольнёт', 5),
  plural1stPerson: Word('кольнём', 5),
  plural2ndPerson: Word('кольнёте', 5),
  plural3rdPerson: Word('кольнут', 5),
  masculinePast: Word('кольнул', 5),
  femininePast: Word('кольнула', 5),
  neuterPast: Word('кольнуло', 5),
  pluralPast: Word('кольнули', 5),
  imperativeInformal: Word('кольни', 5),
  imperativeFormal: Word('кольните', 5),
  imperfect: [],
};

perfectVerbs.set(кольнуть.name.text, кольнуть);

export { кольнуть };