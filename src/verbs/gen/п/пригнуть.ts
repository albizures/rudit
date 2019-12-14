import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригнуть: PerfectVerb = {
  name: Word('пригнуть', 5),
  singular1stPerson: Word('пригну', 5),
  singular2ndPerson: Word('пригнёшь', 5),
  singular3rdPerson: Word('пригнёт', 5),
  plural1stPerson: Word('пригнём', 5),
  plural2ndPerson: Word('пригнёте', 5),
  plural3rdPerson: Word('пригнут', 5),
  masculinePast: Word('пригнул', 5),
  femininePast: Word('пригнула', 5),
  neuterPast: Word('пригнуло', 5),
  pluralPast: Word('пригнули', 5),
  imperativeInformal: Word('пригни', 5),
  imperativeFormal: Word('пригните', 5),
  imperfect: [],
};

perfectVerbs.set(пригнуть.name.text, пригнуть);

export { пригнуть };