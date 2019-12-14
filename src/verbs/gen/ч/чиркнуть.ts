import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чиркнуть: PerfectVerb = {
  name: Word('чиркнуть', 1),
  singular1stPerson: Word('чиркну', 1),
  singular2ndPerson: Word('чиркнешь', 1),
  singular3rdPerson: Word('чиркнет', 1),
  plural1stPerson: Word('чиркнем', 1),
  plural2ndPerson: Word('чиркнете', 1),
  plural3rdPerson: Word('чиркнут', 1),
  masculinePast: Word('чиркнул', 1),
  femininePast: Word('чиркнула', 1),
  neuterPast: Word('чиркнуло', 1),
  pluralPast: Word('чиркнули', 1),
  imperativeInformal: Word('чиркни', 1),
  imperativeFormal: Word('чиркните', 1),
  imperfect: [],
};

perfectVerbs.set(чиркнуть.name.text, чиркнуть);

export { чиркнуть };