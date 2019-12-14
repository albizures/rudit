import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтянуть: PerfectVerb = {
  name: Word('обтянуть', 5),
  singular1stPerson: Word('обтяну', 5),
  singular2ndPerson: Word('обтянешь', 3),
  singular3rdPerson: Word('обтянет', 3),
  plural1stPerson: Word('обтянем', 3),
  plural2ndPerson: Word('обтянете', 3),
  plural3rdPerson: Word('обтянут', 3),
  masculinePast: Word('обтянул', 5),
  femininePast: Word('обтянула', 5),
  neuterPast: Word('обтянуло', 5),
  pluralPast: Word('обтянули', 5),
  imperativeInformal: Word('обтяни', 5),
  imperativeFormal: Word('обтяните', 5),
  imperfect: [],
};

perfectVerbs.set(обтянуть.name.text, обтянуть);

export { обтянуть };