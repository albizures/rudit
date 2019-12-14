import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрусеть: PerfectVerb = {
  name: Word('обрусеть', 5),
  singular1stPerson: Word('обрусею', 5),
  singular2ndPerson: Word('обрусеешь', 5),
  singular3rdPerson: Word('обрусеет', 5),
  plural1stPerson: Word('обрусеем', 5),
  plural2ndPerson: Word('обрусеете', 5),
  plural3rdPerson: Word('обрусеют', 5),
  masculinePast: Word('обрусел', 5),
  femininePast: Word('обрусела', 5),
  neuterPast: Word('обрусело', 5),
  pluralPast: Word('обрусели', 5),
  imperativeInformal: Word('обрусей', 5),
  imperativeFormal: Word('обрусейте', 5),
  imperfect: [],
};

perfectVerbs.set(обрусеть.name.text, обрусеть);

export { обрусеть };