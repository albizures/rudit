import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упомянуть: PerfectVerb = {
  name: Word('упомянуть', 6),
  singular1stPerson: Word('упомяну', 6),
  singular2ndPerson: Word('упомянешь', 4),
  singular3rdPerson: Word('упомянет', 4),
  plural1stPerson: Word('упомянем', 4),
  plural2ndPerson: Word('упомянете', 4),
  plural3rdPerson: Word('упомянут', 4),
  masculinePast: Word('упомянул', 6),
  femininePast: Word('упомянула', 6),
  neuterPast: Word('упомянуло', 6),
  pluralPast: Word('упомянули', 6),
  imperativeInformal: Word('упомяни', 6),
  imperativeFormal: Word('упомяните', 6),
  imperfect: ['упоминать'],
};

perfectVerbs.set(упомянуть.name.text, упомянуть);

export { упомянуть };