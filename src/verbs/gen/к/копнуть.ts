import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const копнуть: PerfectVerb = {
  name: Word('копнуть', 4),
  singular1stPerson: Word('копну', 4),
  singular2ndPerson: Word('копнёшь', 4),
  singular3rdPerson: Word('копнёт', 4),
  plural1stPerson: Word('копнём', 4),
  plural2ndPerson: Word('копнёте', 4),
  plural3rdPerson: Word('копнут', 4),
  masculinePast: Word('копнул', 4),
  femininePast: Word('копнула', 4),
  neuterPast: Word('копнуло', 4),
  pluralPast: Word('копнули', 4),
  imperativeInformal: Word('копни', 4),
  imperativeFormal: Word('копните', 4),
  imperfect: [],
};

perfectVerbs.set(копнуть.name.text, копнуть);

export { копнуть };