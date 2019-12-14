import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const катнуть: PerfectVerb = {
  name: Word('катнуть', 4),
  singular1stPerson: Word('катну', 4),
  singular2ndPerson: Word('катнёшь', 1),
  singular3rdPerson: Word('катнёт', 1),
  plural1stPerson: Word('катнём', 1),
  plural2ndPerson: Word('катнёте', 1),
  plural3rdPerson: Word('катнут', 4),
  masculinePast: Word('катнул', 4),
  femininePast: Word('катнула', 4),
  neuterPast: Word('катнуло', 4),
  pluralPast: Word('катнули', 4),
  imperativeInformal: Word('катни', 4),
  imperativeFormal: Word('катните', 4),
  imperfect: [],
};

perfectVerbs.set(катнуть.name.text, катнуть);

export { катнуть };