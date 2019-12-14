import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогадать: PerfectVerb = {
  name: Word('прогадать', 6),
  singular1stPerson: Word('прогадаю', 6),
  singular2ndPerson: Word('прогадаешь', 6),
  singular3rdPerson: Word('прогадает', 6),
  plural1stPerson: Word('прогадаем', 6),
  plural2ndPerson: Word('прогадаете', 6),
  plural3rdPerson: Word('прогадают', 6),
  masculinePast: Word('прогадал', 6),
  femininePast: Word('прогадала', 6),
  neuterPast: Word('прогадало', 6),
  pluralPast: Word('прогадали', 6),
  imperativeInformal: Word('прогадай', 6),
  imperativeFormal: Word('прогадайте', 6),
  imperfect: [],
};

perfectVerbs.set(прогадать.name.text, прогадать);

export { прогадать };