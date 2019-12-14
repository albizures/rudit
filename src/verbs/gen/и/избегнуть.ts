import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избегнуть: PerfectVerb = {
  name: Word('избегнуть', 3),
  singular1stPerson: Word('избегну', 3),
  singular2ndPerson: Word('избегнешь', 3),
  singular3rdPerson: Word('избегнет', 3),
  plural1stPerson: Word('избегнем', 3),
  plural2ndPerson: Word('избегнете', 3),
  plural3rdPerson: Word('избегнут', 3),
  masculinePast: Word('избег//избе'гнул', 3),
  femininePast: Word('избегла', 3),
  neuterPast: Word('избегло', 3),
  pluralPast: Word('избегли', 3),
  imperativeInformal: Word('избегни', 3),
  imperativeFormal: Word('избегните', 3),
  imperfect: [],
};

perfectVerbs.set(избегнуть.name.text, избегнуть);

export { избегнуть };