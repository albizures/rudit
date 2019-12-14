import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обеднеть: PerfectVerb = {
  name: Word('обеднеть', 5),
  singular1stPerson: Word('обеднею', 5),
  singular2ndPerson: Word('обеднеешь', 5),
  singular3rdPerson: Word('обеднеет', 5),
  plural1stPerson: Word('обеднеем', 5),
  plural2ndPerson: Word('обеднеете', 5),
  plural3rdPerson: Word('обеднеют', 5),
  masculinePast: Word('обеднел', 5),
  femininePast: Word('обеднела', 5),
  neuterPast: Word('обеднело', 5),
  pluralPast: Word('обеднели', 5),
  imperativeInformal: Word('обедней', 5),
  imperativeFormal: Word('обеднейте', 5),
  imperfect: [],
};

perfectVerbs.set(обеднеть.name.text, обеднеть);

export { обеднеть };