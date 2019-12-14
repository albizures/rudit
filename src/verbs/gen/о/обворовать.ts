import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обворовать: PerfectVerb = {
  name: Word('обворовать', 7),
  singular1stPerson: Word('обворую', 5),
  singular2ndPerson: Word('обворуешь', 5),
  singular3rdPerson: Word('обворует', 5),
  plural1stPerson: Word('обворуем', 5),
  plural2ndPerson: Word('обворуете', 5),
  plural3rdPerson: Word('обворуют', 5),
  masculinePast: Word('обворовал', 7),
  femininePast: Word('обворовала', 7),
  neuterPast: Word('обворовало', 7),
  pluralPast: Word('обворовали', 7),
  imperativeInformal: Word('обворуй', 5),
  imperativeFormal: Word('обворуйте', 5),
  imperfect: [],
};

perfectVerbs.set(обворовать.name.text, обворовать);

export { обворовать };