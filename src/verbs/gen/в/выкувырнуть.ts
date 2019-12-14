import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкувырнуть: PerfectVerb = {
  name: Word('выкувырнуть', 1),
  singular1stPerson: Word('выкувырну', 1),
  singular2ndPerson: Word('выкувырнешь', 1),
  singular3rdPerson: Word('выкувырнет', 1),
  plural1stPerson: Word('выкувырнем', 1),
  plural2ndPerson: Word('выкувырнете', 1),
  plural3rdPerson: Word('выкувырнут', 1),
  masculinePast: Word('выкувырнул', 1),
  femininePast: Word('выкувырнула', 1),
  neuterPast: Word('выкувырнуло', 1),
  pluralPast: Word('выкувырнули', 1),
  imperativeInformal: Word('выкувырни', 1),
  imperativeFormal: Word('выкувырните', 1),
  imperfect: [],
};

perfectVerbs.set(выкувырнуть.name.text, выкувырнуть);

export { выкувырнуть };