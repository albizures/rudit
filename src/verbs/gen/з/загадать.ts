import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загадать: PerfectVerb = {
  name: Word('загадать', 5),
  singular1stPerson: Word('загадаю', 5),
  singular2ndPerson: Word('загадаешь', 5),
  singular3rdPerson: Word('загадает', 5),
  plural1stPerson: Word('загадаем', 5),
  plural2ndPerson: Word('загадаете', 5),
  plural3rdPerson: Word('загадают', 5),
  masculinePast: Word('загадал', 5),
  femininePast: Word('загадала', 5),
  neuterPast: Word('загадало', 5),
  pluralPast: Word('загадали', 5),
  imperativeInformal: Word('загадай', 5),
  imperativeFormal: Word('загадайте', 5),
  imperfect: [],
};

perfectVerbs.set(загадать.name.text, загадать);

export { загадать };