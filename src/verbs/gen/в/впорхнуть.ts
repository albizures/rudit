import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впорхнуть: PerfectVerb = {
  name: Word('впорхнуть', 6),
  singular1stPerson: Word('впорхну', 6),
  singular2ndPerson: Word('впорхнёшь', 6),
  singular3rdPerson: Word('впорхнёт', 6),
  plural1stPerson: Word('впорхнём', 6),
  plural2ndPerson: Word('впорхнёте', 6),
  plural3rdPerson: Word('впорхнут', 6),
  masculinePast: Word('впорхнул', 6),
  femininePast: Word('впорхнула', 6),
  neuterPast: Word('впорхнуло', 6),
  pluralPast: Word('впорхнули', 6),
  imperativeInformal: Word('впорхни', 6),
  imperativeFormal: Word('впорхните', 6),
  imperfect: [],
};

perfectVerbs.set(впорхнуть.name.text, впорхнуть);

export { впорхнуть };