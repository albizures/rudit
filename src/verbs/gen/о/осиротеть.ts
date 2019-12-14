import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осиротеть: PerfectVerb = {
  name: Word('осиротеть', 6),
  singular1stPerson: Word('осиротею', 6),
  singular2ndPerson: Word('осиротеешь', 6),
  singular3rdPerson: Word('осиротеет', 6),
  plural1stPerson: Word('осиротеем', 6),
  plural2ndPerson: Word('осиротеете', 6),
  plural3rdPerson: Word('осиротеют', 6),
  masculinePast: Word('осиротел', 6),
  femininePast: Word('осиротела', 6),
  neuterPast: Word('осиротело', 6),
  pluralPast: Word('осиротели', 6),
  imperativeInformal: Word('осиротей', 6),
  imperativeFormal: Word('осиротейте', 6),
  imperfect: [],
};

perfectVerbs.set(осиротеть.name.text, осиротеть);

export { осиротеть };