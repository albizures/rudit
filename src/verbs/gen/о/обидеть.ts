import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обидеть: PerfectVerb = {
  name: Word('обидеть', 2),
  singular1stPerson: Word('обижу', 2),
  singular2ndPerson: Word('обидишь', 2),
  singular3rdPerson: Word('обидит', 2),
  plural1stPerson: Word('обидим', 2),
  plural2ndPerson: Word('обидите', 2),
  plural3rdPerson: Word('обидят', 2),
  masculinePast: Word('обидел', 2),
  femininePast: Word('обидела', 2),
  neuterPast: Word('обидело', 2),
  pluralPast: Word('обидели', 2),
  imperativeInformal: Word('обидь', 2),
  imperativeFormal: Word('обидьте', 2),
  imperfect: ['обижать'],
};

perfectVerbs.set(обидеть.name.text, обидеть);

export { обидеть };