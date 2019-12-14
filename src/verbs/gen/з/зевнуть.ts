import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зевнуть: PerfectVerb = {
  name: Word('зевнуть', 4),
  singular1stPerson: Word('зевну', 4),
  singular2ndPerson: Word('зевнёшь', 4),
  singular3rdPerson: Word('зевнёт', 4),
  plural1stPerson: Word('зевнём', 4),
  plural2ndPerson: Word('зевнёте', 4),
  plural3rdPerson: Word('зевнут', 4),
  masculinePast: Word('зевнул', 4),
  femininePast: Word('зевнула', 4),
  neuterPast: Word('зевнуло', 4),
  pluralPast: Word('зевнули', 4),
  imperativeInformal: Word('зевни', 4),
  imperativeFormal: Word('зевните', 4),
  imperfect: [],
};

perfectVerbs.set(зевнуть.name.text, зевнуть);

export { зевнуть };