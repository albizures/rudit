import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пыхнуть: PerfectVerb = {
  name: Word('пыхнуть', 4),
  singular1stPerson: Word('пыхну', 4),
  singular2ndPerson: Word('пыхнёшь', 4),
  singular3rdPerson: Word('пыхнёт', 4),
  plural1stPerson: Word('пыхнём', 4),
  plural2ndPerson: Word('пыхнёте', 6),
  plural3rdPerson: Word('пыхнут', 4),
  masculinePast: Word('пыхнул', 4),
  femininePast: Word('пыхнула', 4),
  neuterPast: Word('пыхнуло', 4),
  pluralPast: Word('пыхнули', 4),
  imperativeInformal: Word('пыхни', 4),
  imperativeFormal: Word('пыхните', 4),
  imperfect: [],
};

perfectVerbs.set(пыхнуть.name.text, пыхнуть);

export { пыхнуть };