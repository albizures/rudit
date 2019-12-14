import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сожительствовать: PerfectVerb = {
  name: Word('сожительствовать', 3),
  singular1stPerson: Word('сожительствую', 3),
  singular2ndPerson: Word('сожительствуешь', 3),
  singular3rdPerson: Word('сожительствует', 3),
  plural1stPerson: Word('сожительствуем', 3),
  plural2ndPerson: Word('сожительствуете', 3),
  plural3rdPerson: Word('сожительствуют', 3),
  masculinePast: Word('сожительствовал', 3),
  femininePast: Word('сожительствовала', 3),
  neuterPast: Word('сожительствовало', 3),
  pluralPast: Word('сожительствовали', 3),
  imperativeInformal: Word('сожительствуй', 3),
  imperativeFormal: Word('сожительствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(сожительствовать.name.text, сожительствовать);

export { сожительствовать };