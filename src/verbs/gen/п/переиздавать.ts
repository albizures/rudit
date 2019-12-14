import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переиздавать: PerfectVerb = {
  name: Word('переиздавать', 9),
  singular1stPerson: Word('переиздаю', 8),
  singular2ndPerson: Word('переиздаёшь', 7),
  singular3rdPerson: Word('переиздаёт', 7),
  plural1stPerson: Word('переиздаём', 7),
  plural2ndPerson: Word('переиздаёте', 7),
  plural3rdPerson: Word('переиздают', 8),
  masculinePast: Word('переиздавал', 9),
  femininePast: Word('переиздавала', 9),
  neuterPast: Word('переиздавало', 9),
  pluralPast: Word('переиздавали', 9),
  imperativeInformal: Word('переиздавай', 9),
  imperativeFormal: Word('переиздавайте', 9),
  imperfect: [],
};

perfectVerbs.set(переиздавать.name.text, переиздавать);

export { переиздавать };