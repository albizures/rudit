import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const юркнуть: PerfectVerb = {
  name: Word('юркнуть', 4),
  singular1stPerson: Word('юркну', 4),
  singular2ndPerson: Word('юркнёшь', 4),
  singular3rdPerson: Word('юркнёт', 4),
  plural1stPerson: Word('юркнём', 4),
  plural2ndPerson: Word('юркнёте', 4),
  plural3rdPerson: Word('юркнут', 4),
  masculinePast: Word('юркнул', 4),
  femininePast: Word('юркнула', 4),
  neuterPast: Word('юркнуло', 4),
  pluralPast: Word('юркнули', 4),
  imperativeInformal: Word('юркни', 4),
  imperativeFormal: Word('юркните', 4),
  imperfect: [],
};

perfectVerbs.set(юркнуть.name.text, юркнуть);

export { юркнуть };