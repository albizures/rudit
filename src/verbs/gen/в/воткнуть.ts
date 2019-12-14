import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воткнуть: PerfectVerb = {
  name: Word('воткнуть', 5),
  singular1stPerson: Word('воткну', 5),
  singular2ndPerson: Word('воткнёшь', 1),
  singular3rdPerson: Word('воткнёт', 1),
  plural1stPerson: Word('воткнём', 1),
  plural2ndPerson: Word('воткнёте', 7),
  plural3rdPerson: Word('воткнут', 5),
  masculinePast: Word('воткнул', 5),
  femininePast: Word('воткнула', 5),
  neuterPast: Word('воткнуло', 5),
  pluralPast: Word('воткнули', 5),
  imperativeInformal: Word('воткни', 5),
  imperativeFormal: Word('воткните', 5),
  imperfect: [],
};

perfectVerbs.set(воткнуть.name.text, воткнуть);

export { воткнуть };