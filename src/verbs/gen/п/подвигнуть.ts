import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвигнуть: PerfectVerb = {
  name: Word('подвигнуть', 4),
  singular1stPerson: Word('подвигну', 4),
  singular2ndPerson: Word('подвигнешь', 4),
  singular3rdPerson: Word('подвигнет', 4),
  plural1stPerson: Word('подвигнем', 4),
  plural2ndPerson: Word('подвигнете', 4),
  plural3rdPerson: Word('подвигнут', 4),
  masculinePast: Word('подвигнул', 4),
  femininePast: Word('подвигла', 4),
  neuterPast: Word('подвигло', 4),
  pluralPast: Word('подвигли', 4),
  imperativeInformal: Word('подвигни', 4),
  imperativeFormal: Word('подвигните', 4),
  imperfect: [],
};

perfectVerbs.set(подвигнуть.name.text, подвигнуть);

export { подвигнуть };