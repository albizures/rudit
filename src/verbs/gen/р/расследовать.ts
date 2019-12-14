import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расследовать: PerfectVerb = {
  name: Word('расследовать', 5),
  singular1stPerson: Word('расследую', 5),
  singular2ndPerson: Word('расследуешь', 5),
  singular3rdPerson: Word('расследует', 5),
  plural1stPerson: Word('расследуем', 5),
  plural2ndPerson: Word('расследуете', 5),
  plural3rdPerson: Word('расследуют', 5),
  masculinePast: Word('расследовал', 5),
  femininePast: Word('расследовала', 5),
  neuterPast: Word('расследовало', 5),
  pluralPast: Word('расследовали', 5),
  imperativeInformal: Word('расследуй', 5),
  imperativeFormal: Word('расследуйте', 5),
  imperfect: [],
};

perfectVerbs.set(расследовать.name.text, расследовать);

export { расследовать };