import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переглаживать: PerfectVerb = {
  name: Word('переглаживать', 6),
  singular1stPerson: Word('переглаживаю', 6),
  singular2ndPerson: Word('переглаживаешь', 6),
  singular3rdPerson: Word('переглаживает', 6),
  plural1stPerson: Word('переглаживаем', 6),
  plural2ndPerson: Word('переглаживаете', 6),
  plural3rdPerson: Word('переглаживают', 6),
  masculinePast: Word('переглаживал', 6),
  femininePast: Word('переглаживала', 6),
  neuterPast: Word('переглаживало', 6),
  pluralPast: Word('переглаживали', 6),
  imperativeInformal: Word('переглаживай', 6),
  imperativeFormal: Word('переглаживайте', 6),
  imperfect: [],
};

perfectVerbs.set(переглаживать.name.text, переглаживать);

export { переглаживать };