import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const меркнуть: PerfectVerb = {
  name: Word('меркнуть', 1),
  singular1stPerson: Word('меркну', 1),
  singular2ndPerson: Word('меркнешь', 1),
  singular3rdPerson: Word('меркнет', 1),
  plural1stPerson: Word('меркнем', 1),
  plural2ndPerson: Word('меркнете', 1),
  plural3rdPerson: Word('меркнут', 1),
  masculinePast: Word('мерк//ме'ркнул', 1),
  femininePast: Word('меркла', 1),
  neuterPast: Word('меркло', 1),
  pluralPast: Word('меркли', 1),
  imperativeInformal: Word('меркни', 1),
  imperativeFormal: Word('меркните', 1),
  imperfect: [],
};

perfectVerbs.set(меркнуть.name.text, меркнуть);

export { меркнуть };