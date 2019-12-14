import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проткнуть: PerfectVerb = {
  name: Word('проткнуть', 6),
  singular1stPerson: Word('проткну', 6),
  singular2ndPerson: Word('проткнёшь', 6),
  singular3rdPerson: Word('проткнёт', 6),
  plural1stPerson: Word('проткнём', 6),
  plural2ndPerson: Word('проткнёте', 6),
  plural3rdPerson: Word('проткнут', 6),
  masculinePast: Word('проткнул', 6),
  femininePast: Word('проткнула', 6),
  neuterPast: Word('проткнуло', 6),
  pluralPast: Word('проткнули', 6),
  imperativeInformal: Word('проткни', 6),
  imperativeFormal: Word('проткните', 6),
  imperfect: [],
};

perfectVerbs.set(проткнуть.name.text, проткнуть);

export { проткнуть };