import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттереть: PerfectVerb = {
  name: Word('оттереть', 5),
  singular1stPerson: Word('ототру', 5),
  singular2ndPerson: Word('ототрёшь', 0),
  singular3rdPerson: Word('ототрёт', 0),
  plural1stPerson: Word('ототрём', 0),
  plural2ndPerson: Word('ототрёте', 7),
  plural3rdPerson: Word('ототрут', 5),
  masculinePast: Word('оттёр', 0),
  femininePast: Word('оттёрла', 6),
  neuterPast: Word('оттёрло', 0),
  pluralPast: Word('оттёрли', 6),
  imperativeInformal: Word('ототри', 5),
  imperativeFormal: Word('ототрите', 5),
  imperfect: [],
};

perfectVerbs.set(оттереть.name.text, оттереть);

export { оттереть };