import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пнуть: PerfectVerb = {
  name: Word('пнуть', 2),
  singular1stPerson: Word('пну', 2),
  singular2ndPerson: Word('пнёшь', 2),
  singular3rdPerson: Word('пнёт', 2),
  plural1stPerson: Word('пнём', 2),
  plural2ndPerson: Word('пнёте', 4),
  plural3rdPerson: Word('пнут', 2),
  masculinePast: Word('пнул', 2),
  femininePast: Word('пнула', 2),
  neuterPast: Word('пнуло', 2),
  pluralPast: Word('пнули', 2),
  imperativeInformal: Word('пни', 2),
  imperativeFormal: Word('пните', 2),
  imperfect: [],
};

perfectVerbs.set(пнуть.name.text, пнуть);

export { пнуть };