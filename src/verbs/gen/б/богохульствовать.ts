import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const богохульствовать: PerfectVerb = {
  name: Word('богохульствовать', 5),
  singular1stPerson: Word('богохульствую', 5),
  singular2ndPerson: Word('богохульствуешь', 5),
  singular3rdPerson: Word('богохульствует', 5),
  plural1stPerson: Word('богохульствуем', 5),
  plural2ndPerson: Word('богохульствуете', 5),
  plural3rdPerson: Word('богохульствуют', 5),
  masculinePast: Word('богохульствовал', 5),
  femininePast: Word('богохульствовала', 5),
  neuterPast: Word('богохульствовало', 5),
  pluralPast: Word('богохульствовали', 5),
  imperativeInformal: Word('богохульствуй', 5),
  imperativeFormal: Word('богохульствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(богохульствовать.name.text, богохульствовать);

export { богохульствовать };