import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотянуть: PerfectVerb = {
  name: Word('дотянуть', 5),
  singular1stPerson: Word('дотяну', 5),
  singular2ndPerson: Word('дотянешь', 3),
  singular3rdPerson: Word('дотянет', 3),
  plural1stPerson: Word('дотянем', 3),
  plural2ndPerson: Word('дотянете', 3),
  plural3rdPerson: Word('дотянут', 3),
  masculinePast: Word('дотянул', 5),
  femininePast: Word('дотянула', 5),
  neuterPast: Word('дотянуло', 5),
  pluralPast: Word('дотянули', 5),
  imperativeInformal: Word('дотяни', 5),
  imperativeFormal: Word('дотяните', 5),
  imperfect: [],
};

perfectVerbs.set(дотянуть.name.text, дотянуть);

export { дотянуть };