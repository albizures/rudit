import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переоборудовать: PerfectVerb = {
  name: Word('переоборудовать', 8),
  singular1stPerson: Word('переоборудую', 8),
  singular2ndPerson: Word('переоборудуешь', 8),
  singular3rdPerson: Word('переоборудует', 8),
  plural1stPerson: Word('переоборудуем', 8),
  plural2ndPerson: Word('переоборудуете', 8),
  plural3rdPerson: Word('переоборудуют', 8),
  masculinePast: Word('переоборудовал', 8),
  femininePast: Word('переоборудовала', 8),
  neuterPast: Word('переоборудовало', 8),
  pluralPast: Word('переоборудовали', 8),
  imperativeInformal: Word('переоборудуй', 8),
  imperativeFormal: Word('переоборудуйте', 8),
  imperfect: [],
};

perfectVerbs.set(переоборудовать.name.text, переоборудовать);

export { переоборудовать };