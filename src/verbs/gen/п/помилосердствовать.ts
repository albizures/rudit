import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помилосердствовать: PerfectVerb = {
  name: Word('помилосердствовать', 7),
  singular1stPerson: Word('помилосердствую', 7),
  singular2ndPerson: Word('помилосердствуешь', 7),
  singular3rdPerson: Word('помилосердствует', 7),
  plural1stPerson: Word('помилосердствуем', 7),
  plural2ndPerson: Word('помилосердствуете', 7),
  plural3rdPerson: Word('помилосердствуют', 7),
  masculinePast: Word('помилосердствовал', 7),
  femininePast: Word('помилосердствовала', 7),
  neuterPast: Word('помилосердствовало', 7),
  pluralPast: Word('помилосердствовали', 7),
  imperativeInformal: Word('помилосердствуй', 7),
  imperativeFormal: Word('помилосердствуйте', 7),
  imperfect: [],
};

perfectVerbs.set(помилосердствовать.name.text, помилосердствовать);

export { помилосердствовать };