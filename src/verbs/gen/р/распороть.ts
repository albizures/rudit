import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распороть: PerfectVerb = {
  name: Word('распороть', 6),
  singular1stPerson: Word('распорю', 6),
  singular2ndPerson: Word('распорешь', 4),
  singular3rdPerson: Word('распорет', 4),
  plural1stPerson: Word('распорем', 4),
  plural2ndPerson: Word('распорете', 4),
  plural3rdPerson: Word('распорют', 4),
  masculinePast: Word('распорол', 6),
  femininePast: Word('распорола', 6),
  neuterPast: Word('распороло', 6),
  pluralPast: Word('распороли', 6),
  imperativeInformal: Word('распори', 6),
  imperativeFormal: Word('распорите', 6),
  imperfect: [],
};

perfectVerbs.set(распороть.name.text, распороть);

export { распороть };