import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соответствовать: PerfectVerb = {
  name: Word('соответствовать', 5),
  singular1stPerson: Word('соответствую', 5),
  singular2ndPerson: Word('соответствуешь', 5),
  singular3rdPerson: Word('соответствует', 5),
  plural1stPerson: Word('соответствуем', 5),
  plural2ndPerson: Word('соответствуете', 5),
  plural3rdPerson: Word('соответствуют', 5),
  masculinePast: Word('соответствовал', 5),
  femininePast: Word('соответствовала', 5),
  neuterPast: Word('соответствовало', 5),
  pluralPast: Word('соответствовали', 5),
  imperativeInformal: Word('соответствуй', 5),
  imperativeFormal: Word('соответствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(соответствовать.name.text, соответствовать);

export { соответствовать };