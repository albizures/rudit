import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совершенствовать: PerfectVerb = {
  name: Word('совершенствовать', 6),
  singular1stPerson: Word('совершенствую', 6),
  singular2ndPerson: Word('совершенствуешь', 6),
  singular3rdPerson: Word('совершенствует', 6),
  plural1stPerson: Word('совершенствуем', 6),
  plural2ndPerson: Word('совершенствуете', 6),
  plural3rdPerson: Word('совершенствуют', 6),
  masculinePast: Word('совершенствовал', 6),
  femininePast: Word('совершенствовала', 6),
  neuterPast: Word('совершенствовало', 6),
  pluralPast: Word('совершенствовали', 6),
  imperativeInformal: Word('совершенствуй', 6),
  imperativeFormal: Word('совершенствуйте', 6),
  imperfect: ['усовершенствовать'],
};

perfectVerbs.set(совершенствовать.name.text, совершенствовать);

export { совершенствовать };