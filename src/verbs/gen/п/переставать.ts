import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переставать: PerfectVerb = {
  name: Word('переставать', 8),
  singular1stPerson: Word('перестаю', 7),
  singular2ndPerson: Word('перестаёшь', 7),
  singular3rdPerson: Word('перестаёт', 7),
  plural1stPerson: Word('перестаём', 7),
  plural2ndPerson: Word('перестаёте', 7),
  plural3rdPerson: Word('перестают', 7),
  masculinePast: Word('переставал', 8),
  femininePast: Word('переставала', 8),
  neuterPast: Word('переставало', 8),
  pluralPast: Word('переставали', 8),
  imperativeInformal: Word('переставай', 8),
  imperativeFormal: Word('переставайте', 8),
  imperfect: ['перестать'],
};

perfectVerbs.set(переставать.name.text, переставать);

export { переставать };