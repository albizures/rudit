import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыжеть: PerfectVerb = {
  name: Word('рыжеть', 3),
  singular1stPerson: Word('рыжею', 3),
  singular2ndPerson: Word('рыжеешь', 3),
  singular3rdPerson: Word('рыжеет', 3),
  plural1stPerson: Word('рыжеем', 3),
  plural2ndPerson: Word('рыжеете', 3),
  plural3rdPerson: Word('рыжеют', 3),
  masculinePast: Word('рыжел', 3),
  femininePast: Word('рыжела', 3),
  neuterPast: Word('рыжело', 3),
  pluralPast: Word('рыжели', 3),
  imperativeInformal: Word('рыжей', 3),
  imperativeFormal: Word('рыжейте', 3),
  imperfect: [],
};

perfectVerbs.set(рыжеть.name.text, рыжеть);

export { рыжеть };