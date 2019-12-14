import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бетонировать: PerfectVerb = {
  name: Word('бетонировать', 5),
  singular1stPerson: Word('бетонирую', 5),
  singular2ndPerson: Word('бетонируешь', 5),
  singular3rdPerson: Word('бетонирует', 5),
  plural1stPerson: Word('бетонируем', 5),
  plural2ndPerson: Word('бетонируете', 5),
  plural3rdPerson: Word('бетонируют', 5),
  masculinePast: Word('бетонировал', 5),
  femininePast: Word('бетонировала', 5),
  neuterPast: Word('бетонировало', 5),
  pluralPast: Word('бетонировали', 5),
  imperativeInformal: Word('бетонируй', 5),
  imperativeFormal: Word('бетонируйте', 5),
  imperfect: [],
};

perfectVerbs.set(бетонировать.name.text, бетонировать);

export { бетонировать };