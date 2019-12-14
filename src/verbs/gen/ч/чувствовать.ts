import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чувствовать: PerfectVerb = {
  name: Word('чувствовать', 1),
  singular1stPerson: Word('чувствую', 1),
  singular2ndPerson: Word('чувствуешь', 1),
  singular3rdPerson: Word('чувствует', 1),
  plural1stPerson: Word('чувствуем', 1),
  plural2ndPerson: Word('чувствуете', 1),
  plural3rdPerson: Word('чувствуют', 1),
  masculinePast: Word('чувствовал', 1),
  femininePast: Word('чувствовала', 1),
  neuterPast: Word('чувствовало', 1),
  pluralPast: Word('чувствовали', 1),
  imperativeInformal: Word('чувствуй', 1),
  imperativeFormal: Word('чувствуйте', 1),
  imperfect: ['почувствовать'],
};

perfectVerbs.set(чувствовать.name.text, чувствовать);

export { чувствовать };