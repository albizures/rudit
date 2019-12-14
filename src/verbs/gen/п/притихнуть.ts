import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притихнуть: PerfectVerb = {
  name: Word('притихнуть', 4),
  singular1stPerson: Word('притихну', 4),
  singular2ndPerson: Word('притихнешь', 4),
  singular3rdPerson: Word('притихнет', 4),
  plural1stPerson: Word('притихнем', 4),
  plural2ndPerson: Word('притихнете', 4),
  plural3rdPerson: Word('притихнут', 4),
  masculinePast: Word('притих', 4),
  femininePast: Word('притихла', 4),
  neuterPast: Word('притихло', 4),
  pluralPast: Word('притихли', 4),
  imperativeInformal: Word('притихни', 4),
  imperativeFormal: Word('притихните', 4),
  imperfect: [],
};

perfectVerbs.set(притихнуть.name.text, притихнуть);

export { притихнуть };