import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бешенствовать: PerfectVerb = {
  name: Word('бешенствовать', 1),
  singular1stPerson: Word('бешенствую', 1),
  singular2ndPerson: Word('бешенствуешь', 1),
  singular3rdPerson: Word('бешенствует', 1),
  plural1stPerson: Word('бешенствуем', 1),
  plural2ndPerson: Word('бешенствуете', 1),
  plural3rdPerson: Word('бешенствуют', 1),
  masculinePast: Word('бешенствовал', 1),
  femininePast: Word('бешенствовала', 1),
  neuterPast: Word('бешенствовало', 1),
  pluralPast: Word('бешенствовали', 1),
  imperativeInformal: Word('бешенствуй', 1),
  imperativeFormal: Word('бешенствуйте', 1),
  imperfect: [],
};

perfectVerbs.set(бешенствовать.name.text, бешенствовать);

export { бешенствовать };