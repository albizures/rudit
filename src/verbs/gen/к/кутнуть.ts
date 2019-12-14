import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кутнуть: PerfectVerb = {
  name: Word('кутнуть', 4),
  singular1stPerson: Word('кутну', 4),
  singular2ndPerson: Word('кутнёшь', 1),
  singular3rdPerson: Word('кутнёт', 1),
  plural1stPerson: Word('кутнём', 1),
  plural2ndPerson: Word('кутнёте', 6),
  plural3rdPerson: Word('кутнут', 4),
  masculinePast: Word('кутнул', 4),
  femininePast: Word('кутнула', 4),
  neuterPast: Word('кутнуло', 4),
  pluralPast: Word('кутнули', 4),
  imperativeInformal: Word('кутни', 4),
  imperativeFormal: Word('кутните', 4),
  imperfect: [],
};

perfectVerbs.set(кутнуть.name.text, кутнуть);

export { кутнуть };