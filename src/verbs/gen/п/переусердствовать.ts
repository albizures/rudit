import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переусердствовать: PerfectVerb = {
  name: Word('переусердствовать', 6),
  singular1stPerson: Word('переусердствую', 6),
  singular2ndPerson: Word('переусердствуешь', 6),
  singular3rdPerson: Word('переусердствует', 6),
  plural1stPerson: Word('переусердствуем', 6),
  plural2ndPerson: Word('переусердствуете', 6),
  plural3rdPerson: Word('переусердствуют', 6),
  masculinePast: Word('переусердствовал', 6),
  femininePast: Word('переусердствовала', 6),
  neuterPast: Word('переусердствовало', 6),
  pluralPast: Word('переусердствовали', 6),
  imperativeInformal: Word('переусердствуй', 6),
  imperativeFormal: Word('переусердствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(переусердствовать.name.text, переусердствовать);

export { переусердствовать };