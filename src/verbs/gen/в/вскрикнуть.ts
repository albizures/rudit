import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскрикнуть: PerfectVerb = {
  name: Word('вскрикнуть', 4),
  singular1stPerson: Word('вскрикну', 4),
  singular2ndPerson: Word('вскрикнешь', 4),
  singular3rdPerson: Word('вскрикнет', 4),
  plural1stPerson: Word('вскрикнем', 4),
  plural2ndPerson: Word('вскрикнете', 4),
  plural3rdPerson: Word('вскрикнут', 4),
  masculinePast: Word('вскрикнул', 4),
  femininePast: Word('вскрикнула', 4),
  neuterPast: Word('вскрикнуло', 4),
  pluralPast: Word('вскрикнули', 4),
  imperativeInformal: Word('вскрикни', 4),
  imperativeFormal: Word('вскрикните', 4),
  imperfect: [],
};

perfectVerbs.set(вскрикнуть.name.text, вскрикнуть);

export { вскрикнуть };