import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пырнуть: PerfectVerb = {
  name: Word('пырнуть', 4),
  singular1stPerson: Word('пырну', 4),
  singular2ndPerson: Word('пырнёшь', 4),
  singular3rdPerson: Word('пырнёт', 4),
  plural1stPerson: Word('пырнём', 4),
  plural2ndPerson: Word('пырнёте', 4),
  plural3rdPerson: Word('пырнут', 4),
  masculinePast: Word('пырнул', 4),
  femininePast: Word('пырнула', 4),
  neuterPast: Word('пырнуло', 4),
  pluralPast: Word('пырнули', 4),
  imperativeInformal: Word('пырни', 4),
  imperativeFormal: Word('пырните', 4),
  imperfect: [],
};

perfectVerbs.set(пырнуть.name.text, пырнуть);

export { пырнуть };