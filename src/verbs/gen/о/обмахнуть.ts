import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмахнуть: PerfectVerb = {
  name: Word('обмахнуть', 6),
  singular1stPerson: Word('обмахну', 6),
  singular2ndPerson: Word('обмахнёшь', 3),
  singular3rdPerson: Word('обмахнёт', 3),
  plural1stPerson: Word('обмахнём', 3),
  plural2ndPerson: Word('обмахнёте', 3),
  plural3rdPerson: Word('обмахнут', 6),
  masculinePast: Word('обмахнул', 6),
  femininePast: Word('обмахнула', 6),
  neuterPast: Word('обмахнуло', 6),
  pluralPast: Word('обмахнули', 6),
  imperativeInformal: Word('обмахни', 6),
  imperativeFormal: Word('обмахните', 6),
  imperfect: [],
};

perfectVerbs.set(обмахнуть.name.text, обмахнуть);

export { обмахнуть };