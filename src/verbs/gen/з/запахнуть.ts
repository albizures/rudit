import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запахнуть: PerfectVerb = {
  name: Word('запахнуть', 6),
  singular1stPerson: Word('запахну', 6),
  singular2ndPerson: Word('запахнёшь', 6),
  singular3rdPerson: Word('запахнёт', 6),
  plural1stPerson: Word('запахнём', 6),
  plural2ndPerson: Word('запахнёте', 6),
  plural3rdPerson: Word('запахнут', 6),
  masculinePast: Word('запахнул', 6),
  femininePast: Word('запахнула', 6),
  neuterPast: Word('запахнуло', 6),
  pluralPast: Word('запахнули', 6),
  imperativeInformal: Word('запахни', 6),
  imperativeFormal: Word('запахните', 6),
  imperfect: [],
};

perfectVerbs.set(запахнуть.name.text, запахнуть);

export { запахнуть };