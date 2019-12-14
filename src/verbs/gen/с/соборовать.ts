import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соборовать: PerfectVerb = {
  name: Word('соборовать', 3),
  singular1stPerson: Word('соборую', 3),
  singular2ndPerson: Word('соборуешь', 3),
  singular3rdPerson: Word('соборует', 3),
  plural1stPerson: Word('соборуем', 3),
  plural2ndPerson: Word('соборуете', 3),
  plural3rdPerson: Word('соборуют', 3),
  masculinePast: Word('соборовал', 3),
  femininePast: Word('соборовала', 3),
  neuterPast: Word('соборовало', 3),
  pluralPast: Word('соборовали', 3),
  imperativeInformal: Word('соборуй', 3),
  imperativeFormal: Word('соборуйте', 3),
  imperfect: [],
};

perfectVerbs.set(соборовать.name.text, соборовать);

export { соборовать };