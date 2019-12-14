import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облюбовать: PerfectVerb = {
  name: Word('облюбовать', 7),
  singular1stPerson: Word('облюбую', 5),
  singular2ndPerson: Word('облюбуешь', 5),
  singular3rdPerson: Word('облюбует', 5),
  plural1stPerson: Word('облюбуем', 5),
  plural2ndPerson: Word('облюбуете', 5),
  plural3rdPerson: Word('облюбуют', 5),
  masculinePast: Word('облюбовал', 7),
  femininePast: Word('облюбовала', 7),
  neuterPast: Word('облюбовало', 7),
  pluralPast: Word('облюбовали', 7),
  imperativeInformal: Word('облюбуй', 5),
  imperativeFormal: Word('облюбуйте', 5),
  imperfect: [],
};

perfectVerbs.set(облюбовать.name.text, облюбовать);

export { облюбовать };