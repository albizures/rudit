import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переработать: PerfectVerb = {
  name: Word('переработать', 7),
  singular1stPerson: Word('переработаю', 7),
  singular2ndPerson: Word('переработаешь', 7),
  singular3rdPerson: Word('переработает', 7),
  plural1stPerson: Word('переработаем', 7),
  plural2ndPerson: Word('переработаете', 7),
  plural3rdPerson: Word('переработают', 7),
  masculinePast: Word('переработал', 7),
  femininePast: Word('переработала', 7),
  neuterPast: Word('переработало', 7),
  pluralPast: Word('переработали', 7),
  imperativeInformal: Word('переработай', 7),
  imperativeFormal: Word('переработайте', 7),
  imperfect: [],
};

perfectVerbs.set(переработать.name.text, переработать);

export { переработать };