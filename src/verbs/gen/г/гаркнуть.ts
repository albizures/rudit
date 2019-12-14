import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гаркнуть: PerfectVerb = {
  name: Word('гаркнуть', 1),
  singular1stPerson: Word('гаркну', 1),
  singular2ndPerson: Word('гаркнешь', 1),
  singular3rdPerson: Word('гаркнет', 1),
  plural1stPerson: Word('гаркнем', 1),
  plural2ndPerson: Word('гаркнете', 1),
  plural3rdPerson: Word('гаркнут', 1),
  masculinePast: Word('гаркнул', 1),
  femininePast: Word('гаркнула', 1),
  neuterPast: Word('гаркнуло', 1),
  pluralPast: Word('гаркнули', 1),
  imperativeInformal: Word('гаркни', 1),
  imperativeFormal: Word('гаркните', 1),
  imperfect: [],
};

perfectVerbs.set(гаркнуть.name.text, гаркнуть);

export { гаркнуть };