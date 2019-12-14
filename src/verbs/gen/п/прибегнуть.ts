import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибегнуть: PerfectVerb = {
  name: Word('прибегнуть', 4),
  singular1stPerson: Word('прибегну', 4),
  singular2ndPerson: Word('прибегнешь', 4),
  singular3rdPerson: Word('прибегнет', 4),
  plural1stPerson: Word('прибегнем', 4),
  plural2ndPerson: Word('прибегнете', 4),
  plural3rdPerson: Word('прибегнут', 4),
  masculinePast: Word('прибег//прибе'гнул', 4),
  femininePast: Word('прибегла', 4),
  neuterPast: Word('прибегло', 4),
  pluralPast: Word('прибегли', 4),
  imperativeInformal: Word('прибегни', 4),
  imperativeFormal: Word('прибегните', 4),
  imperfect: [],
};

perfectVerbs.set(прибегнуть.name.text, прибегнуть);

export { прибегнуть };