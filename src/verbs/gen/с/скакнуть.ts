import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скакнуть: PerfectVerb = {
  name: Word('скакнуть', 5),
  singular1stPerson: Word('скакну', 5),
  singular2ndPerson: Word('скакнёшь', 2),
  singular3rdPerson: Word('скакнёт', 2),
  plural1stPerson: Word('скакнём', 2),
  plural2ndPerson: Word('скакнёте', 2),
  plural3rdPerson: Word('скакнут', 5),
  masculinePast: Word('скакнул', 5),
  femininePast: Word('скакнула', 5),
  neuterPast: Word('скакнуло', 5),
  pluralPast: Word('скакнули', 5),
  imperativeInformal: Word('скакни', 5),
  imperativeFormal: Word('скакните', 5),
  imperfect: [],
};

perfectVerbs.set(скакнуть.name.text, скакнуть);

export { скакнуть };