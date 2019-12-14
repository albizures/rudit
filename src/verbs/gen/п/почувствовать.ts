import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почувствовать: PerfectVerb = {
  name: Word('почувствовать', 3),
  singular1stPerson: Word('почувствую', 3),
  singular2ndPerson: Word('почувствуешь', 3),
  singular3rdPerson: Word('почувствует', 3),
  plural1stPerson: Word('почувствуем', 3),
  plural2ndPerson: Word('почувствуете', 3),
  plural3rdPerson: Word('почувствуют', 3),
  masculinePast: Word('почувствовал', 3),
  femininePast: Word('почувствовала', 3),
  neuterPast: Word('почувствовало', 3),
  pluralPast: Word('почувствовали', 3),
  imperativeInformal: Word('почувствуй', 3),
  imperativeFormal: Word('почувствуйте', 3),
  imperfect: ['чувствовать'],
};

perfectVerbs.set(почувствовать.name.text, почувствовать);

export { почувствовать };