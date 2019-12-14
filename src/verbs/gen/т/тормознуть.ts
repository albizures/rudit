import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тормознуть: PerfectVerb = {
  name: Word('тормознуть', 7),
  singular1stPerson: Word('тормозну', 7),
  singular2ndPerson: Word('тормознёшь', 7),
  singular3rdPerson: Word('тормознёт', 7),
  plural1stPerson: Word('тормознём', 7),
  plural2ndPerson: Word('тормознёте', 7),
  plural3rdPerson: Word('тормознут', 7),
  masculinePast: Word('тормознул', 7),
  femininePast: Word('тормознула', 7),
  neuterPast: Word('тормознуло', 7),
  pluralPast: Word('тормознули', 7),
  imperativeInformal: Word('тормозни', 7),
  imperativeFormal: Word('тормозните', 7),
  imperfect: [],
};

perfectVerbs.set(тормознуть.name.text, тормознуть);

export { тормознуть };