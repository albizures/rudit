import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const буркнуть: PerfectVerb = {
  name: Word('буркнуть', 1),
  singular1stPerson: Word('буркну', 1),
  singular2ndPerson: Word('буркнешь', 1),
  singular3rdPerson: Word('буркнет', 1),
  plural1stPerson: Word('буркнем', 1),
  plural2ndPerson: Word('буркнете', 1),
  plural3rdPerson: Word('буркнут', 1),
  masculinePast: Word('буркнул', 1),
  femininePast: Word('буркнула', 1),
  neuterPast: Word('буркнуло', 1),
  pluralPast: Word('буркнули', 1),
  imperativeInformal: Word('буркни', 1),
  imperativeFormal: Word('буркните', 1),
  imperfect: [],
};

perfectVerbs.set(буркнуть.name.text, буркнуть);

export { буркнуть };