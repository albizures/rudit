import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпадать: PerfectVerb = {
  name: Word('выпадать', 5),
  singular1stPerson: Word('выпадаю', 5),
  singular2ndPerson: Word('выпадаешь', 5),
  singular3rdPerson: Word('выпадает', 5),
  plural1stPerson: Word('выпадаем', 5),
  plural2ndPerson: Word('выпадаете', 5),
  plural3rdPerson: Word('выпадают', 5),
  masculinePast: Word('выпадал', 5),
  femininePast: Word('выпадала', 5),
  neuterPast: Word('выпадало', 5),
  pluralPast: Word('выпадали', 5),
  imperativeInformal: Word('выпадай', 5),
  imperativeFormal: Word('выпадайте', 5),
  imperfect: [],
};

perfectVerbs.set(выпадать.name.text, выпадать);

export { выпадать };