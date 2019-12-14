import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растянуть: PerfectVerb = {
  name: Word('растянуть', 6),
  singular1stPerson: Word('растяну', 6),
  singular2ndPerson: Word('растянешь', 4),
  singular3rdPerson: Word('растянет', 4),
  plural1stPerson: Word('растянем', 4),
  plural2ndPerson: Word('растянете', 4),
  plural3rdPerson: Word('растянут', 4),
  masculinePast: Word('растянул', 6),
  femininePast: Word('растянула', 6),
  neuterPast: Word('растянуло', 6),
  pluralPast: Word('растянули', 6),
  imperativeInformal: Word('растяни', 6),
  imperativeFormal: Word('растяните', 6),
  imperfect: [],
};

perfectVerbs.set(растянуть.name.text, растянуть);

export { растянуть };