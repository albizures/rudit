import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтянуть: PerfectVerb = {
  name: Word('подтянуть', 6),
  singular1stPerson: Word('подтяну', 6),
  singular2ndPerson: Word('подтянешь', 4),
  singular3rdPerson: Word('подтянет', 4),
  plural1stPerson: Word('подтянем', 4),
  plural2ndPerson: Word('подтянете', 4),
  plural3rdPerson: Word('подтянут', 4),
  masculinePast: Word('подтянул', 6),
  femininePast: Word('подтянула', 6),
  neuterPast: Word('подтянуло', 6),
  pluralPast: Word('подтянули', 6),
  imperativeInformal: Word('подтяни', 6),
  imperativeFormal: Word('подтяните', 6),
  imperfect: [],
};

perfectVerbs.set(подтянуть.name.text, подтянуть);

export { подтянуть };