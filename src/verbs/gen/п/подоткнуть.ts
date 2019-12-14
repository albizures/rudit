import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подоткнуть: PerfectVerb = {
  name: Word('подоткнуть', 7),
  singular1stPerson: Word('подоткну', 7),
  singular2ndPerson: Word('подоткнёшь', 7),
  singular3rdPerson: Word('подоткнёт', 7),
  plural1stPerson: Word('подоткнём', 7),
  plural2ndPerson: Word('подоткнёте', 7),
  plural3rdPerson: Word('подоткнут', 7),
  masculinePast: Word('подоткнул', 7),
  femininePast: Word('подоткнула', 7),
  neuterPast: Word('подоткнуло', 7),
  pluralPast: Word('подоткнули', 7),
  imperativeInformal: Word('подоткни', 7),
  imperativeFormal: Word('подоткните', 7),
  imperfect: [],
};

perfectVerbs.set(подоткнуть.name.text, подоткнуть);

export { подоткнуть };