import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переползать: PerfectVerb = {
  name: Word('переползать', 8),
  singular1stPerson: Word('переползаю', 8),
  singular2ndPerson: Word('переползаешь', 8),
  singular3rdPerson: Word('переползает', 8),
  plural1stPerson: Word('переползаем', 8),
  plural2ndPerson: Word('переползаете', 8),
  plural3rdPerson: Word('переползают', 8),
  masculinePast: Word('переползал', 8),
  femininePast: Word('переползала', 8),
  neuterPast: Word('переползало', 8),
  pluralPast: Word('переползали', 8),
  imperativeInformal: Word('переползай', 8),
  imperativeFormal: Word('переползайте', 8),
  imperfect: [],
};

perfectVerbs.set(переползать.name.text, переползать);

export { переползать };