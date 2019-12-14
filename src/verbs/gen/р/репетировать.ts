import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const репетировать: PerfectVerb = {
  name: Word('репетировать', 5),
  singular1stPerson: Word('репетирую', 5),
  singular2ndPerson: Word('репетируешь', 5),
  singular3rdPerson: Word('репетирует', 5),
  plural1stPerson: Word('репетируем', 5),
  plural2ndPerson: Word('репетируете', 5),
  plural3rdPerson: Word('репетируют', 5),
  masculinePast: Word('репетировал', 5),
  femininePast: Word('репетировала', 5),
  neuterPast: Word('репетировало', 5),
  pluralPast: Word('репетировали', 5),
  imperativeInformal: Word('репетируй', 5),
  imperativeFormal: Word('репетируйте', 5),
  imperfect: [],
};

perfectVerbs.set(репетировать.name.text, репетировать);

export { репетировать };