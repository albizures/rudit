import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соседствовать: PerfectVerb = {
  name: Word('соседствовать', 3),
  singular1stPerson: Word('соседствую', 3),
  singular2ndPerson: Word('соседствуешь', 3),
  singular3rdPerson: Word('соседствует', 3),
  plural1stPerson: Word('соседствуем', 3),
  plural2ndPerson: Word('соседствуете', 3),
  plural3rdPerson: Word('соседствуют', 3),
  masculinePast: Word('соседствовал', 3),
  femininePast: Word('соседствовала', 3),
  neuterPast: Word('соседствовало', 3),
  pluralPast: Word('соседствовали', 3),
  imperativeInformal: Word('соседствуй', 3),
  imperativeFormal: Word('соседствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(соседствовать.name.text, соседствовать);

export { соседствовать };