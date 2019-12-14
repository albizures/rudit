import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздёрнуть: PerfectVerb = {
  name: Word('вздёрнуть', 3),
  singular1stPerson: Word('вздёрну', 3),
  singular2ndPerson: Word('вздёрнешь', 3),
  singular3rdPerson: Word('вздёрнет', 3),
  plural1stPerson: Word('вздёрнем', 3),
  plural2ndPerson: Word('вздёрнете', 3),
  plural3rdPerson: Word('вздёрнут', 3),
  masculinePast: Word('вздёрнул', 3),
  femininePast: Word('вздёрнула', 3),
  neuterPast: Word('вздёрнуло', 3),
  pluralPast: Word('вздёрнули', 3),
  imperativeInformal: Word('вздёрни', 3),
  imperativeFormal: Word('вздёрните', 3),
  imperfect: [],
};

perfectVerbs.set(вздёрнуть.name.text, вздёрнуть);

export { вздёрнуть };