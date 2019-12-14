import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттереть: PerfectVerb = {
  name: Word('оттереть', 5),
  singular1stPerson: Word('ототру', 5),
  singular2ndPerson: Word('ототрёшь', 5),
  singular3rdPerson: Word('ототрёт', 5),
  plural1stPerson: Word('ототрём', 5),
  plural2ndPerson: Word('ототрёте', 5),
  plural3rdPerson: Word('ототрут', 5),
  masculinePast: Word('оттёр', 3),
  femininePast: Word('оттёрла', 3),
  neuterPast: Word('оттёрло', 3),
  pluralPast: Word('оттёрли', 3),
  imperativeInformal: Word('ототри', 5),
  imperativeFormal: Word('ототрите', 5),
  imperfect: [],
};

perfectVerbs.set(оттереть.name.text, оттереть);

export { оттереть };