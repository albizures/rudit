import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попадать: PerfectVerb = {
  name: Word('попадать', 3),
  singular1stPerson: Word('попадаю', 3),
  singular2ndPerson: Word('попадаешь', 3),
  singular3rdPerson: Word('попадает', 3),
  plural1stPerson: Word('попадаем', 3),
  plural2ndPerson: Word('попадаете', 3),
  plural3rdPerson: Word('попадают', 3),
  masculinePast: Word('попадал', 3),
  femininePast: Word('попадала', 3),
  neuterPast: Word('попадало', 3),
  pluralPast: Word('попадали', 3),
  imperativeInformal: Word('попадай', 3),
  imperativeFormal: Word('попадайте', 3),
  imperfect: [],
};

perfectVerbs.set(попадать.name.text, попадать);

export { попадать };