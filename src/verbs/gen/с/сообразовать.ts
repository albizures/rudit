import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сообразовать: PerfectVerb = {
  name: Word('сообразовать', 9),
  singular1stPerson: Word('сообразую', 7),
  singular2ndPerson: Word('сообразуешь', 7),
  singular3rdPerson: Word('сообразует', 7),
  plural1stPerson: Word('сообразуем', 7),
  plural2ndPerson: Word('сообразуете', 7),
  plural3rdPerson: Word('сообразуют', 7),
  masculinePast: Word('сообразовал', 9),
  femininePast: Word('сообразовала', 9),
  neuterPast: Word('сообразовало', 9),
  pluralPast: Word('сообразовали', 9),
  imperativeInformal: Word('сообразуй', 7),
  imperativeFormal: Word('сообразуйте', 7),
  imperfect: [],
};

perfectVerbs.set(сообразовать.name.text, сообразовать);

export { сообразовать };