import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бисировать: PerfectVerb = {
  name: Word('бисировать', 3),
  singular1stPerson: Word('бисирую', 3),
  singular2ndPerson: Word('бисируешь', 3),
  singular3rdPerson: Word('бисирует', 3),
  plural1stPerson: Word('бисируем', 3),
  plural2ndPerson: Word('бисируете', 3),
  plural3rdPerson: Word('бисируют', 3),
  masculinePast: Word('бисировал', 3),
  femininePast: Word('бисировала', 3),
  neuterPast: Word('бисировало', 3),
  pluralPast: Word('бисировали', 3),
  imperativeInformal: Word('бисируй', 3),
  imperativeFormal: Word('бисируйте', 3),
  imperfect: [],
};

perfectVerbs.set(бисировать.name.text, бисировать);

export { бисировать };