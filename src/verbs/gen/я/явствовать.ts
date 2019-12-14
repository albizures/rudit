import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const явствовать: PerfectVerb = {
  name: Word('явствовать', 0),
  singular1stPerson: Word('явствую', 0),
  singular2ndPerson: Word('явствуешь', 0),
  singular3rdPerson: Word('явствует', 0),
  plural1stPerson: Word('явствуем', 0),
  plural2ndPerson: Word('явствуете', 0),
  plural3rdPerson: Word('явствуют', 0),
  masculinePast: Word('явствовал', 0),
  femininePast: Word('явствовала', 0),
  neuterPast: Word('явствовало', 0),
  pluralPast: Word('явствовали', 0),
  imperativeInformal: Word('явствуй', 0),
  imperativeFormal: Word('явствуйте', 0),
  imperfect: [],
};

perfectVerbs.set(явствовать.name.text, явствовать);

export { явствовать };