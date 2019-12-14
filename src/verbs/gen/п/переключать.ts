import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переключать: PerfectVerb = {
  name: Word('переключать', 8),
  singular1stPerson: Word('переключаю', 8),
  singular2ndPerson: Word('переключаешь', 8),
  singular3rdPerson: Word('переключает', 8),
  plural1stPerson: Word('переключаем', 8),
  plural2ndPerson: Word('переключаете', 8),
  plural3rdPerson: Word('переключают', 8),
  masculinePast: Word('переключал', 8),
  femininePast: Word('переключала', 8),
  neuterPast: Word('переключало', 8),
  pluralPast: Word('переключали', 8),
  imperativeInformal: Word('переключай', 8),
  imperativeFormal: Word('переключайте', 8),
  imperfect: [],
};

perfectVerbs.set(переключать.name.text, переключать);

export { переключать };