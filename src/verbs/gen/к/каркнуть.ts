import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const каркнуть: PerfectVerb = {
  name: Word('каркнуть', 1),
  singular1stPerson: Word('каркну', 1),
  singular2ndPerson: Word('каркнешь', 1),
  singular3rdPerson: Word('каркнет', 1),
  plural1stPerson: Word('каркнем', 1),
  plural2ndPerson: Word('каркнете', 1),
  plural3rdPerson: Word('каркнут', 1),
  masculinePast: Word('каркнул', 1),
  femininePast: Word('каркнула', 1),
  neuterPast: Word('каркнуло', 1),
  pluralPast: Word('каркнули', 1),
  imperativeInformal: Word('каркни', 1),
  imperativeFormal: Word('каркните', 1),
  imperfect: [],
};

perfectVerbs.set(каркнуть.name.text, каркнуть);

export { каркнуть };