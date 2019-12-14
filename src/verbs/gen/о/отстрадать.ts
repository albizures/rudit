import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстрадать: PerfectVerb = {
  name: Word('отстрадать', 7),
  singular1stPerson: Word('отстрадаю', 7),
  singular2ndPerson: Word('отстрадаешь', 7),
  singular3rdPerson: Word('отстрадает', 7),
  plural1stPerson: Word('отстрадаем', 7),
  plural2ndPerson: Word('отстрадаете', 7),
  plural3rdPerson: Word('отстрадают', 7),
  masculinePast: Word('отстрадал', 7),
  femininePast: Word('отстрадала', 7),
  neuterPast: Word('отстрадало', 7),
  pluralPast: Word('отстрадали', 7),
  imperativeInformal: Word('отстрадай', 7),
  imperativeFormal: Word('отстрадайте', 7),
  imperfect: [],
};

perfectVerbs.set(отстрадать.name.text, отстрадать);

export { отстрадать };