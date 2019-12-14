import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исповедовать: PerfectVerb = {
  name: Word('исповедовать', 5),
  singular1stPerson: Word('исповедую', 5),
  singular2ndPerson: Word('исповедуешь', 5),
  singular3rdPerson: Word('исповедует', 5),
  plural1stPerson: Word('исповедуем', 5),
  plural2ndPerson: Word('исповедуете', 5),
  plural3rdPerson: Word('исповедуют', 5),
  masculinePast: Word('исповедовал', 5),
  femininePast: Word('исповедовала', 5),
  neuterPast: Word('исповедовало', 5),
  pluralPast: Word('исповедовали', 5),
  imperativeInformal: Word('исповедуй', 5),
  imperativeFormal: Word('исповедуйте', 5),
  imperfect: [],
};

perfectVerbs.set(исповедовать.name.text, исповедовать);

export { исповедовать };