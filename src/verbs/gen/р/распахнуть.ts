import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распахнуть: PerfectVerb = {
  name: Word('распахнуть', 7),
  singular1stPerson: Word('распахну', 7),
  singular2ndPerson: Word('распахнёшь', 7),
  singular3rdPerson: Word('распахнёт', 7),
  plural1stPerson: Word('распахнём', 7),
  plural2ndPerson: Word('распахнёте', 7),
  plural3rdPerson: Word('распахнут', 7),
  masculinePast: Word('распахнул', 7),
  femininePast: Word('распахнула', 7),
  neuterPast: Word('распахнуло', 7),
  pluralPast: Word('распахнули', 7),
  imperativeInformal: Word('распахни', 7),
  imperativeFormal: Word('распахните', 7),
  imperfect: [],
};

perfectVerbs.set(распахнуть.name.text, распахнуть);

export { распахнуть };