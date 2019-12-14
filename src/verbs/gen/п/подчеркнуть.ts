import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подчеркнуть: PerfectVerb = {
  name: Word('подчеркнуть', 8),
  singular1stPerson: Word('подчеркну', 8),
  singular2ndPerson: Word('подчеркнёшь', 8),
  singular3rdPerson: Word('подчеркнёт', 8),
  plural1stPerson: Word('подчеркнём', 8),
  plural2ndPerson: Word('подчеркнёте', 8),
  plural3rdPerson: Word('подчеркнут', 8),
  masculinePast: Word('подчеркнул', 8),
  femininePast: Word('подчеркнула', 8),
  neuterPast: Word('подчеркнуло', 8),
  pluralPast: Word('подчеркнули', 8),
  imperativeInformal: Word('подчеркни', 8),
  imperativeFormal: Word('подчеркните', 8),
  imperfect: ['подчёркивать'],
};

perfectVerbs.set(подчеркнуть.name.text, подчеркнуть);

export { подчеркнуть };