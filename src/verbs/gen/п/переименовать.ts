import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переименовать: PerfectVerb = {
  name: Word('переименовать', 10),
  singular1stPerson: Word('переименую', 8),
  singular2ndPerson: Word('переименуешь', 8),
  singular3rdPerson: Word('переименует', 8),
  plural1stPerson: Word('переименуем', 8),
  plural2ndPerson: Word('переименуете', 8),
  plural3rdPerson: Word('переименуют', 8),
  masculinePast: Word('переименовал', 10),
  femininePast: Word('переименовала', 10),
  neuterPast: Word('переименовало', 10),
  pluralPast: Word('переименовали', 10),
  imperativeInformal: Word('переименуй', 8),
  imperativeFormal: Word('переименуйте', 8),
  imperfect: [],
};

perfectVerbs.set(переименовать.name.text, переименовать);

export { переименовать };