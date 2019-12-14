import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бесчинствовать: PerfectVerb = {
  name: Word('бесчинствовать', 4),
  singular1stPerson: Word('бесчинствую', 4),
  singular2ndPerson: Word('бесчинствуешь', 4),
  singular3rdPerson: Word('бесчинствует', 4),
  plural1stPerson: Word('бесчинствуем', 4),
  plural2ndPerson: Word('бесчинствуете', 4),
  plural3rdPerson: Word('бесчинствуют', 4),
  masculinePast: Word('бесчинствовал', 4),
  femininePast: Word('бесчинствовала', 4),
  neuterPast: Word('бесчинствовало', 4),
  pluralPast: Word('бесчинствовали', 4),
  imperativeInformal: Word('бесчинствуй', 4),
  imperativeFormal: Word('бесчинствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(бесчинствовать.name.text, бесчинствовать);

export { бесчинствовать };