import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переподготавливать: PerfectVerb = {
  name: Word('переподготавливать', 10),
  singular1stPerson: Word('переподготавливаю', 10),
  singular2ndPerson: Word('переподготавливаешь', 10),
  singular3rdPerson: Word('переподготавливает', 10),
  plural1stPerson: Word('переподготавливаем', 10),
  plural2ndPerson: Word('переподготавливаете', 10),
  plural3rdPerson: Word('переподготавливают', 10),
  masculinePast: Word('переподготавливал', 10),
  femininePast: Word('переподготавливала', 10),
  neuterPast: Word('переподготавливало', 10),
  pluralPast: Word('переподготавливали', 10),
  imperativeInformal: Word('переподготавливай', 10),
  imperativeFormal: Word('переподготавливайте', 10),
  imperfect: [],
};

perfectVerbs.set(переподготавливать.name.text, переподготавливать);

export { переподготавливать };