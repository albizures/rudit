import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бравировать: PerfectVerb = {
  name: Word('бравировать', 4),
  singular1stPerson: Word('бравирую', 4),
  singular2ndPerson: Word('бравируешь', 4),
  singular3rdPerson: Word('бравирует', 4),
  plural1stPerson: Word('бравируем', 4),
  plural2ndPerson: Word('бравируете', 4),
  plural3rdPerson: Word('бравируют', 4),
  masculinePast: Word('бравировал', 4),
  femininePast: Word('бравировала', 4),
  neuterPast: Word('бравировало', 4),
  pluralPast: Word('бравировали', 4),
  imperativeInformal: Word('бравируй', 4),
  imperativeFormal: Word('бравируйте', 4),
  imperfect: [],
};

perfectVerbs.set(бравировать.name.text, бравировать);

export { бравировать };