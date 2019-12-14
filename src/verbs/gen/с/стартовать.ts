import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стартовать: PerfectVerb = {
  name: Word('стартовать', 7),
  singular1stPerson: Word('стартую', 5),
  singular2ndPerson: Word('стартуешь', 5),
  singular3rdPerson: Word('стартует', 5),
  plural1stPerson: Word('стартуем', 5),
  plural2ndPerson: Word('стартуете', 5),
  plural3rdPerson: Word('стартуют', 5),
  masculinePast: Word('стартовал', 7),
  femininePast: Word('стартовала', 7),
  neuterPast: Word('стартовало', 7),
  pluralPast: Word('стартовали', 7),
  imperativeInformal: Word('стартуй', 5),
  imperativeFormal: Word('стартуйте', 5),
  imperfect: [],
};

perfectVerbs.set(стартовать.name.text, стартовать);

export { стартовать };