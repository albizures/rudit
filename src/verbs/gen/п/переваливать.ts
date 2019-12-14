import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переваливать: PerfectVerb = {
  name: Word('переваливать', 5),
  singular1stPerson: Word('переваливаю', 5),
  singular2ndPerson: Word('переваливаешь', 5),
  singular3rdPerson: Word('переваливает', 5),
  plural1stPerson: Word('переваливаем', 5),
  plural2ndPerson: Word('переваливаете', 5),
  plural3rdPerson: Word('переваливают', 5),
  masculinePast: Word('переваливал', 5),
  femininePast: Word('переваливала', 5),
  neuterPast: Word('переваливало', 5),
  pluralPast: Word('переваливали', 5),
  imperativeInformal: Word('переваливай', 5),
  imperativeFormal: Word('переваливайте', 5),
  imperfect: [],
};

perfectVerbs.set(переваливать.name.text, переваливать);

export { переваливать };