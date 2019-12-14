import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шаркнуть: PerfectVerb = {
  name: Word('шаркнуть', 1),
  singular1stPerson: Word('шаркну', 1),
  singular2ndPerson: Word('шаркнешь', 1),
  singular3rdPerson: Word('шаркнет', 1),
  plural1stPerson: Word('шаркнем', 1),
  plural2ndPerson: Word('шаркнете', 1),
  plural3rdPerson: Word('шаркнут', 1),
  masculinePast: Word('шаркнул', 1),
  femininePast: Word('шаркнула', 1),
  neuterPast: Word('шаркнуло', 1),
  pluralPast: Word('шаркнули', 1),
  imperativeInformal: Word('шаркни', 1),
  imperativeFormal: Word('шаркните', 1),
  imperfect: [],
};

perfectVerbs.set(шаркнуть.name.text, шаркнуть);

export { шаркнуть };