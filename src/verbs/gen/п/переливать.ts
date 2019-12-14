import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переливать: PerfectVerb = {
  name: Word('переливать', 7),
  singular1stPerson: Word('переливаю', 7),
  singular2ndPerson: Word('переливаешь', 7),
  singular3rdPerson: Word('переливает', 7),
  plural1stPerson: Word('переливаем', 7),
  plural2ndPerson: Word('переливаете', 7),
  plural3rdPerson: Word('переливают', 7),
  masculinePast: Word('переливал', 7),
  femininePast: Word('переливала', 7),
  neuterPast: Word('переливало', 7),
  pluralPast: Word('переливали', 7),
  imperativeInformal: Word('переливай', 7),
  imperativeFormal: Word('переливайте', 7),
  imperfect: [],
};

perfectVerbs.set(переливать.name.text, переливать);

export { переливать };