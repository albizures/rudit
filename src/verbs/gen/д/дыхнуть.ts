import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дыхнуть: PerfectVerb = {
  name: Word('дыхнуть', 4),
  singular1stPerson: Word('дыхну', 4),
  singular2ndPerson: Word('дыхнёшь', 4),
  singular3rdPerson: Word('дыхнёт', 4),
  plural1stPerson: Word('дыхнём', 4),
  plural2ndPerson: Word('дыхнёте', 6),
  plural3rdPerson: Word('дыхнут', 4),
  masculinePast: Word('дыхнул', 4),
  femininePast: Word('дыхнула', 4),
  neuterPast: Word('дыхнуло', 4),
  pluralPast: Word('дыхнули', 4),
  imperativeInformal: Word('дыхни', 4),
  imperativeFormal: Word('дыхните', 4),
  imperfect: [],
};

perfectVerbs.set(дыхнуть.name.text, дыхнуть);

export { дыхнуть };