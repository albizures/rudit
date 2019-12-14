import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дрогнуть: PerfectVerb = {
  name: Word('дрогнуть', 2),
  singular1stPerson: Word('дрогну', 2),
  singular2ndPerson: Word('дрогнешь', 2),
  singular3rdPerson: Word('дрогнет', 2),
  plural1stPerson: Word('дрогнем', 2),
  plural2ndPerson: Word('дрогнете', 2),
  plural3rdPerson: Word('дрогнут', 2),
  masculinePast: Word('дрогнул', 2),
  femininePast: Word('дрогнула', 2),
  neuterPast: Word('дрогнуло', 2),
  pluralPast: Word('дрогнули', 2),
  imperativeInformal: Word('дрогни', 2),
  imperativeFormal: Word('дрогните', 2),
  imperfect: [],
};

perfectVerbs.set(дрогнуть.name.text, дрогнуть);

export { дрогнуть };