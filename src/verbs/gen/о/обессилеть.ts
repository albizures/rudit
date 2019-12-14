import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обессилеть: PerfectVerb = {
  name: Word('обессилеть', 5),
  singular1stPerson: Word('обессилею', 5),
  singular2ndPerson: Word('обессилеешь', 5),
  singular3rdPerson: Word('обессилеет', 5),
  plural1stPerson: Word('обессилеем', 5),
  plural2ndPerson: Word('обессилеете', 5),
  plural3rdPerson: Word('обессилеют', 5),
  masculinePast: Word('обессилел', 5),
  femininePast: Word('обессилела', 5),
  neuterPast: Word('обессилело', 5),
  pluralPast: Word('обессилели', 5),
  imperativeInformal: Word('обессилей', 5),
  imperativeFormal: Word('обессилейте', 5),
  imperfect: [],
};

perfectVerbs.set(обессилеть.name.text, обессилеть);

export { обессилеть };