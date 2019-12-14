import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рявкнуть: PerfectVerb = {
  name: Word('рявкнуть', 1),
  singular1stPerson: Word('рявкну', 1),
  singular2ndPerson: Word('рявкнешь', 1),
  singular3rdPerson: Word('рявкнет', 1),
  plural1stPerson: Word('рявкнем', 1),
  plural2ndPerson: Word('рявкнете', 1),
  plural3rdPerson: Word('рявкнут', 1),
  masculinePast: Word('рявкнул', 1),
  femininePast: Word('рявкнула', 1),
  neuterPast: Word('рявкнуло', 1),
  pluralPast: Word('рявкнули', 1),
  imperativeInformal: Word('рявкни', 1),
  imperativeFormal: Word('рявкните', 1),
  imperfect: [],
};

perfectVerbs.set(рявкнуть.name.text, рявкнуть);

export { рявкнуть };