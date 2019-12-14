import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переврать: PerfectVerb = {
  name: Word('переврать', 6),
  singular1stPerson: Word('перевру', 6),
  singular2ndPerson: Word('переврёшь', 6),
  singular3rdPerson: Word('переврёт', 6),
  plural1stPerson: Word('переврём', 6),
  plural2ndPerson: Word('переврёте', 6),
  plural3rdPerson: Word('переврут', 6),
  masculinePast: Word('переврал', 6),
  femininePast: Word('переврала', 8),
  neuterPast: Word('переврало', 6),
  pluralPast: Word('переврали', 6),
  imperativeInformal: Word('переври', 6),
  imperativeFormal: Word('переврите', 6),
  imperfect: [],
};

perfectVerbs.set(переврать.name.text, переврать);

export { переврать };