import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ткнуть: PerfectVerb = {
  name: Word('ткнуть', 3),
  singular1stPerson: Word('ткну', 3),
  singular2ndPerson: Word('ткнёшь', 3),
  singular3rdPerson: Word('ткнёт', 3),
  plural1stPerson: Word('ткнём', 3),
  plural2ndPerson: Word('ткнёте', 3),
  plural3rdPerson: Word('ткнут', 3),
  masculinePast: Word('ткнул', 3),
  femininePast: Word('ткнула', 3),
  neuterPast: Word('ткнуло', 3),
  pluralPast: Word('ткнули', 3),
  imperativeInformal: Word('ткни', 3),
  imperativeFormal: Word('ткните', 3),
  imperfect: [],
};

perfectVerbs.set(ткнуть.name.text, ткнуть);

export { ткнуть };