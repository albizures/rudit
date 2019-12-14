import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тыкнуть: PerfectVerb = {
  name: Word('тыкнуть', 1),
  singular1stPerson: Word('тыкну', 1),
  singular2ndPerson: Word('тыкнешь', 1),
  singular3rdPerson: Word('тыкнет', 1),
  plural1stPerson: Word('тыкнем', 1),
  plural2ndPerson: Word('тыкнете', 1),
  plural3rdPerson: Word('тыкнут', 1),
  masculinePast: Word('тыкнул', 1),
  femininePast: Word('тыкнула', 1),
  neuterPast: Word('тыкнуло', 1),
  pluralPast: Word('тыкнули', 1),
  imperativeInformal: Word('тыкни', 1),
  imperativeFormal: Word('тыкните', 1),
  imperfect: [],
};

perfectVerbs.set(тыкнуть.name.text, тыкнуть);

export { тыкнуть };