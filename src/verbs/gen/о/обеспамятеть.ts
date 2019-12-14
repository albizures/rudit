import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обеспамятеть: PerfectVerb = {
  name: Word('обеспамятеть', 5),
  singular1stPerson: Word('обеспамятею', 5),
  singular2ndPerson: Word('обеспамятеешь', 5),
  singular3rdPerson: Word('обеспамятеет', 5),
  plural1stPerson: Word('обеспамятеем', 5),
  plural2ndPerson: Word('обеспамятеете', 5),
  plural3rdPerson: Word('обеспамятеют', 5),
  masculinePast: Word('обеспамятел', 5),
  femininePast: Word('обеспамятела', 5),
  neuterPast: Word('обеспамятело', 5),
  pluralPast: Word('обеспамятели', 5),
  imperativeInformal: Word('обеспамятей', 5),
  imperativeFormal: Word('обеспамятейте', 5),
  imperfect: [],
};

perfectVerbs.set(обеспамятеть.name.text, обеспамятеть);

export { обеспамятеть };