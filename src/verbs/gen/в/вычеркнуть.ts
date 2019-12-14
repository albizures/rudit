import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычеркнуть: PerfectVerb = {
  name: Word('вычеркнуть', 1),
  singular1stPerson: Word('вычеркну', 1),
  singular2ndPerson: Word('вычеркнешь', 1),
  singular3rdPerson: Word('вычеркнет', 1),
  plural1stPerson: Word('вычеркнем', 1),
  plural2ndPerson: Word('вычеркнете', 1),
  plural3rdPerson: Word('вычеркнут', 1),
  masculinePast: Word('вычеркнул', 1),
  femininePast: Word('вычеркнула', 1),
  neuterPast: Word('вычеркнуло', 1),
  pluralPast: Word('вычеркнули', 1),
  imperativeInformal: Word('вычеркни', 1),
  imperativeFormal: Word('вычеркните', 1),
  imperfect: [],
};

perfectVerbs.set(вычеркнуть.name.text, вычеркнуть);

export { вычеркнуть };