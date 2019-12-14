import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притопнуть: PerfectVerb = {
  name: Word('притопнуть', 4),
  singular1stPerson: Word('притопну', 4),
  singular2ndPerson: Word('притопнешь', 4),
  singular3rdPerson: Word('притопнет', 4),
  plural1stPerson: Word('притопнем', 4),
  plural2ndPerson: Word('притопнете', 4),
  plural3rdPerson: Word('притопнут', 4),
  masculinePast: Word('притопнул', 4),
  femininePast: Word('притопнула', 4),
  neuterPast: Word('притопнуло', 4),
  pluralPast: Word('притопнули', 4),
  imperativeInformal: Word('притопни', 4),
  imperativeFormal: Word('притопните', 4),
  imperfect: [],
};

perfectVerbs.set(притопнуть.name.text, притопнуть);

export { притопнуть };