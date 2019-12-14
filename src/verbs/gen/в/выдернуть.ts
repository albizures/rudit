import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдернуть: PerfectVerb = {
  name: Word('выдернуть', 1),
  singular1stPerson: Word('выдерну', 1),
  singular2ndPerson: Word('выдернешь', 1),
  singular3rdPerson: Word('выдернет', 1),
  plural1stPerson: Word('выдернем', 1),
  plural2ndPerson: Word('выдернете', 1),
  plural3rdPerson: Word('выдернут', 1),
  masculinePast: Word('выдернул', 1),
  femininePast: Word('выдернула', 1),
  neuterPast: Word('выдернуло', 1),
  pluralPast: Word('выдернули', 1),
  imperativeInformal: Word('выдерни', 1),
  imperativeFormal: Word('выдерните', 1),
  imperfect: [],
};

perfectVerbs.set(выдернуть.name.text, выдернуть);

export { выдернуть };