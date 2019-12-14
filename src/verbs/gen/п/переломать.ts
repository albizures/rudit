import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переломать: PerfectVerb = {
  name: Word('переломать', 7),
  singular1stPerson: Word('переломаю', 7),
  singular2ndPerson: Word('переломаешь', 7),
  singular3rdPerson: Word('переломает', 7),
  plural1stPerson: Word('переломаем', 7),
  plural2ndPerson: Word('переломаете', 7),
  plural3rdPerson: Word('переломают', 7),
  masculinePast: Word('переломал', 7),
  femininePast: Word('переломала', 7),
  neuterPast: Word('переломало', 7),
  pluralPast: Word('переломали', 7),
  imperativeInformal: Word('переломай', 7),
  imperativeFormal: Word('переломайте', 7),
  imperfect: [],
};

perfectVerbs.set(переломать.name.text, переломать);

export { переломать };