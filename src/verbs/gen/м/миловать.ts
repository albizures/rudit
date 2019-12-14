import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const миловать: PerfectVerb = {
  name: Word('миловать', 1),
  singular1stPerson: Word('милую', 1),
  singular2ndPerson: Word('милуешь', 1),
  singular3rdPerson: Word('милует', 1),
  plural1stPerson: Word('милуем', 1),
  plural2ndPerson: Word('милуете', 1),
  plural3rdPerson: Word('милуют', 1),
  masculinePast: Word('миловал', 1),
  femininePast: Word('миловала', 1),
  neuterPast: Word('миловало', 1),
  pluralPast: Word('миловали', 1),
  imperativeInformal: Word('милуй', 1),
  imperativeFormal: Word('милуйте', 1),
  imperfect: [],
};

perfectVerbs.set(миловать.name.text, миловать);

export { миловать };