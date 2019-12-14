import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const беднеть: PerfectVerb = {
  name: Word('беднеть', 4),
  singular1stPerson: Word('беднею', 4),
  singular2ndPerson: Word('беднеешь', 4),
  singular3rdPerson: Word('беднеет', 4),
  plural1stPerson: Word('беднеем', 4),
  plural2ndPerson: Word('беднеете', 4),
  plural3rdPerson: Word('беднеют', 4),
  masculinePast: Word('беднел', 4),
  femininePast: Word('беднела', 4),
  neuterPast: Word('беднело', 4),
  pluralPast: Word('беднели', 4),
  imperativeInformal: Word('бедней', 4),
  imperativeFormal: Word('беднейте', 4),
  imperfect: [],
};

perfectVerbs.set(беднеть.name.text, беднеть);

export { беднеть };