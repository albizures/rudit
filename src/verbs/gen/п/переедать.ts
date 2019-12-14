import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переедать: PerfectVerb = {
  name: Word('переедать', 6),
  singular1stPerson: Word('переедаю', 6),
  singular2ndPerson: Word('переедаешь', 6),
  singular3rdPerson: Word('переедает', 6),
  plural1stPerson: Word('переедаем', 6),
  plural2ndPerson: Word('переедаете', 6),
  plural3rdPerson: Word('переедают', 6),
  masculinePast: Word('переедал', 6),
  femininePast: Word('переедала', 6),
  neuterPast: Word('переедало', 6),
  pluralPast: Word('переедали', 6),
  imperativeInformal: Word('переедай', 6),
  imperativeFormal: Word('переедайте', 6),
  imperfect: [],
};

perfectVerbs.set(переедать.name.text, переедать);

export { переедать };