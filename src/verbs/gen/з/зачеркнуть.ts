import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачеркнуть: PerfectVerb = {
  name: Word('зачеркнуть', 7),
  singular1stPerson: Word('зачеркну', 7),
  singular2ndPerson: Word('зачеркнёшь', 1),
  singular3rdPerson: Word('зачеркнёт', 1),
  plural1stPerson: Word('зачеркнём', 1),
  plural2ndPerson: Word('зачеркнёте', 1),
  plural3rdPerson: Word('зачеркнут', 7),
  masculinePast: Word('зачеркнул', 7),
  femininePast: Word('зачеркнула', 7),
  neuterPast: Word('зачеркнуло', 7),
  pluralPast: Word('зачеркнули', 7),
  imperativeInformal: Word('зачеркни', 7),
  imperativeFormal: Word('зачеркните', 7),
  imperfect: [],
};

perfectVerbs.set(зачеркнуть.name.text, зачеркнуть);

export { зачеркнуть };