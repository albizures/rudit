import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переплетать: PerfectVerb = {
  name: Word('переплетать', 8),
  singular1stPerson: Word('переплетаю', 8),
  singular2ndPerson: Word('переплетаешь', 8),
  singular3rdPerson: Word('переплетает', 8),
  plural1stPerson: Word('переплетаем', 8),
  plural2ndPerson: Word('переплетаете', 8),
  plural3rdPerson: Word('переплетают', 8),
  masculinePast: Word('переплетал', 8),
  femininePast: Word('переплетала', 8),
  neuterPast: Word('переплетало', 8),
  pluralPast: Word('переплетали', 8),
  imperativeInformal: Word('переплетай', 8),
  imperativeFormal: Word('переплетайте', 8),
  imperfect: [],
};

perfectVerbs.set(переплетать.name.text, переплетать);

export { переплетать };