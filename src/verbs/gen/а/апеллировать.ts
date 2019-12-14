import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const апеллировать: PerfectVerb = {
  name: Word('апеллировать', 5),
  singular1stPerson: Word('апеллирую', 5),
  singular2ndPerson: Word('апеллируешь', 5),
  singular3rdPerson: Word('апеллирует', 5),
  plural1stPerson: Word('апеллируем', 5),
  plural2ndPerson: Word('апеллируете', 5),
  plural3rdPerson: Word('апеллируют', 5),
  masculinePast: Word('апеллировал', 5),
  femininePast: Word('апеллировала', 5),
  neuterPast: Word('апеллировало', 5),
  pluralPast: Word('апеллировали', 5),
  imperativeInformal: Word('апеллируй', 5),
  imperativeFormal: Word('апеллируйте', 5),
  imperfect: [],
};

perfectVerbs.set(апеллировать.name.text, апеллировать);

export { апеллировать };