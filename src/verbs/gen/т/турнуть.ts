import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const турнуть: PerfectVerb = {
  name: Word('турнуть', 4),
  singular1stPerson: Word('турну', 4),
  singular2ndPerson: Word('турнёшь', 1),
  singular3rdPerson: Word('турнёт', 1),
  plural1stPerson: Word('турнём', 1),
  plural2ndPerson: Word('турнёте', 6),
  plural3rdPerson: Word('турнут', 4),
  masculinePast: Word('турнул', 4),
  femininePast: Word('турнула', 4),
  neuterPast: Word('турнуло', 4),
  pluralPast: Word('турнули', 4),
  imperativeInformal: Word('турни', 4),
  imperativeFormal: Word('турните', 4),
  imperfect: [],
};

perfectVerbs.set(турнуть.name.text, турнуть);

export { турнуть };