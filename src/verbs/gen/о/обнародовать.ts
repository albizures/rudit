import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнародовать: PerfectVerb = {
  name: Word('обнародовать', 5),
  singular1stPerson: Word('обнародую', 5),
  singular2ndPerson: Word('обнародуешь', 5),
  singular3rdPerson: Word('обнародует', 5),
  plural1stPerson: Word('обнародуем', 5),
  plural2ndPerson: Word('обнародуете', 5),
  plural3rdPerson: Word('обнародуют', 5),
  masculinePast: Word('обнародовал', 5),
  femininePast: Word('обнародовала', 5),
  neuterPast: Word('обнародовало', 5),
  pluralPast: Word('обнародовали', 5),
  imperativeInformal: Word('обнародуй', 5),
  imperativeFormal: Word('обнародуйте', 5),
  imperfect: [],
};

perfectVerbs.set(обнародовать.name.text, обнародовать);

export { обнародовать };