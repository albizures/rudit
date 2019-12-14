import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздёрнуть: PerfectVerb = {
  name: Word('вздёрнуть', 6),
  singular1stPerson: Word('вздёрну', 6),
  singular2ndPerson: Word('вздёрнешь', 6),
  singular3rdPerson: Word('вздёрнет', 6),
  plural1stPerson: Word('вздёрнем', 6),
  plural2ndPerson: Word('вздёрнете', 6),
  plural3rdPerson: Word('вздёрнут', 6),
  masculinePast: Word('вздёрнул', 6),
  femininePast: Word('вздёрнула', 8),
  neuterPast: Word('вздёрнуло', 8),
  pluralPast: Word('вздёрнули', 8),
  imperativeInformal: Word('вздёрни', 6),
  imperativeFormal: Word('вздёрните', 8),
  imperfect: [],
};

perfectVerbs.set(вздёрнуть.name.text, вздёрнуть);

export { вздёрнуть };