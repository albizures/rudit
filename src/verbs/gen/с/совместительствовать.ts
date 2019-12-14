import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совместительствовать: PerfectVerb = {
  name: Word('совместительствовать', 7),
  singular1stPerson: Word('совместительствую', 7),
  singular2ndPerson: Word('совместительствуешь', 7),
  singular3rdPerson: Word('совместительствует', 7),
  plural1stPerson: Word('совместительствуем', 7),
  plural2ndPerson: Word('совместительствуете', 7),
  plural3rdPerson: Word('совместительствуют', 7),
  masculinePast: Word('совместительствовал', 7),
  femininePast: Word('совместительствовала', 7),
  neuterPast: Word('совместительствовало', 7),
  pluralPast: Word('совместительствовали', 7),
  imperativeInformal: Word('совместительствуй', 7),
  imperativeFormal: Word('совместительствуйте', 7),
  imperfect: [],
};

perfectVerbs.set(совместительствовать.name.text, совместительствовать);

export { совместительствовать };