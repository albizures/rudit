import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переглотать: PerfectVerb = {
  name: Word('переглотать', 8),
  singular1stPerson: Word('переглотаю', 8),
  singular2ndPerson: Word('переглотаешь', 8),
  singular3rdPerson: Word('переглотает', 8),
  plural1stPerson: Word('переглотаем', 8),
  plural2ndPerson: Word('переглотаете', 8),
  plural3rdPerson: Word('переглотают', 8),
  masculinePast: Word('переглотал', 8),
  femininePast: Word('переглотала', 8),
  neuterPast: Word('переглотало', 8),
  pluralPast: Word('переглотали', 8),
  imperativeInformal: Word('переглотай', 8),
  imperativeFormal: Word('переглотайте', 8),
  imperfect: [],
};

perfectVerbs.set(переглотать.name.text, переглотать);

export { переглотать };