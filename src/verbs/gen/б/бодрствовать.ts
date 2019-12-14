import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бодрствовать: PerfectVerb = {
  name: Word('бодрствовать', 1),
  singular1stPerson: Word('бодрствую', 1),
  singular2ndPerson: Word('бодрствуешь', 1),
  singular3rdPerson: Word('бодрствует', 1),
  plural1stPerson: Word('бодрствуем', 1),
  plural2ndPerson: Word('бодрствуете', 1),
  plural3rdPerson: Word('бодрствуют', 1),
  masculinePast: Word('бодрствовал', 1),
  femininePast: Word('бодрствовала', 1),
  neuterPast: Word('бодрствовало', 1),
  pluralPast: Word('бодрствовали', 1),
  imperativeInformal: Word('бодрствуй', 1),
  imperativeFormal: Word('бодрствуйте', 1),
  imperfect: [],
};

perfectVerbs.set(бодрствовать.name.text, бодрствовать);

export { бодрствовать };