import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смахнуть: PerfectVerb = {
  name: Word('смахнуть', 5),
  singular1stPerson: Word('смахну', 5),
  singular2ndPerson: Word('смахнёшь', 2),
  singular3rdPerson: Word('смахнёт', 2),
  plural1stPerson: Word('смахнём', 2),
  plural2ndPerson: Word('смахнёте', 2),
  plural3rdPerson: Word('смахнут', 5),
  masculinePast: Word('смахнул', 5),
  femininePast: Word('смахнула', 5),
  neuterPast: Word('смахнуло', 5),
  pluralPast: Word('смахнули', 5),
  imperativeInformal: Word('смахни', 5),
  imperativeFormal: Word('смахните', 5),
  imperfect: [],
};

perfectVerbs.set(смахнуть.name.text, смахнуть);

export { смахнуть };