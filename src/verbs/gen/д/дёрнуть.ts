import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дёрнуть: PerfectVerb = {
  name: Word('дёрнуть', 1),
  singular1stPerson: Word('дёрну', 1),
  singular2ndPerson: Word('дёрнешь', 1),
  singular3rdPerson: Word('дёрнет', 1),
  plural1stPerson: Word('дёрнем', 1),
  plural2ndPerson: Word('дёрнете', 1),
  plural3rdPerson: Word('дёрнут', 1),
  masculinePast: Word('дёрнул', 1),
  femininePast: Word('дёрнула', 1),
  neuterPast: Word('дёрнуло', 1),
  pluralPast: Word('дёрнули', 1),
  imperativeInformal: Word('дёрни', 1),
  imperativeFormal: Word('дёрните', 1),
  imperfect: [],
};

perfectVerbs.set(дёрнуть.name.text, дёрнуть);

export { дёрнуть };