import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бедствовать: PerfectVerb = {
  name: Word('бедствовать', 1),
  singular1stPerson: Word('бедствую', 1),
  singular2ndPerson: Word('бедствуешь', 1),
  singular3rdPerson: Word('бедствует', 1),
  plural1stPerson: Word('бедствуем', 1),
  plural2ndPerson: Word('бедствуете', 1),
  plural3rdPerson: Word('бедствуют', 1),
  masculinePast: Word('бедствовал', 1),
  femininePast: Word('бедствовала', 1),
  neuterPast: Word('бедствовало', 1),
  pluralPast: Word('бедствовали', 1),
  imperativeInformal: Word('бедствуй', 1),
  imperativeFormal: Word('бедствуйте', 1),
  imperfect: [],
};

perfectVerbs.set(бедствовать.name.text, бедствовать);

export { бедствовать };