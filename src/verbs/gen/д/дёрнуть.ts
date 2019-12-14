import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дёрнуть: PerfectVerb = {
  name: Word('дёрнуть', 4),
  singular1stPerson: Word('дёрну', 4),
  singular2ndPerson: Word('дёрнешь', 4),
  singular3rdPerson: Word('дёрнет', 4),
  plural1stPerson: Word('дёрнем', 4),
  plural2ndPerson: Word('дёрнете', 4),
  plural3rdPerson: Word('дёрнут', 4),
  masculinePast: Word('дёрнул', 4),
  femininePast: Word('дёрнула', 6),
  neuterPast: Word('дёрнуло', 6),
  pluralPast: Word('дёрнули', 6),
  imperativeInformal: Word('дёрни', 4),
  imperativeFormal: Word('дёрните', 6),
  imperfect: [],
};

perfectVerbs.set(дёрнуть.name.text, дёрнуть);

export { дёрнуть };