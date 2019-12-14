import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чмокнуть: PerfectVerb = {
  name: Word('чмокнуть', 2),
  singular1stPerson: Word('чмокну', 2),
  singular2ndPerson: Word('чмокнешь', 2),
  singular3rdPerson: Word('чмокнет', 2),
  plural1stPerson: Word('чмокнем', 2),
  plural2ndPerson: Word('чмокнете', 2),
  plural3rdPerson: Word('чмокнут', 2),
  masculinePast: Word('чмокнул', 2),
  femininePast: Word('чмокнула', 2),
  neuterPast: Word('чмокнуло', 2),
  pluralPast: Word('чмокнули', 2),
  imperativeInformal: Word('чмокни', 2),
  imperativeFormal: Word('чмокните', 2),
  imperfect: [],
};

perfectVerbs.set(чмокнуть.name.text, чмокнуть);

export { чмокнуть };