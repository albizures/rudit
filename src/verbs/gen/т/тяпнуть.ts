import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тяпнуть: PerfectVerb = {
  name: Word('тяпнуть', 1),
  singular1stPerson: Word('тяпну', 1),
  singular2ndPerson: Word('тяпнешь', 1),
  singular3rdPerson: Word('тяпнет', 1),
  plural1stPerson: Word('тяпнем', 1),
  plural2ndPerson: Word('тяпнете', 1),
  plural3rdPerson: Word('тяпнут', 1),
  masculinePast: Word('тяпнул', 1),
  femininePast: Word('тяпнула', 1),
  neuterPast: Word('тяпнуло', 1),
  pluralPast: Word('тяпнули', 1),
  imperativeInformal: Word('тяпни', 1),
  imperativeFormal: Word('тяпните', 1),
  imperfect: [],
};

perfectVerbs.set(тяпнуть.name.text, тяпнуть);

export { тяпнуть };