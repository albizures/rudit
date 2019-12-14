import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгадать: PerfectVerb = {
  name: Word('отгадать', 5),
  singular1stPerson: Word('отгадаю', 5),
  singular2ndPerson: Word('отгадаешь', 5),
  singular3rdPerson: Word('отгадает', 5),
  plural1stPerson: Word('отгадаем', 5),
  plural2ndPerson: Word('отгадаете', 5),
  plural3rdPerson: Word('отгадают', 5),
  masculinePast: Word('отгадал', 5),
  femininePast: Word('отгадала', 5),
  neuterPast: Word('отгадало', 5),
  pluralPast: Word('отгадали', 5),
  imperativeInformal: Word('отгадай', 5),
  imperativeFormal: Word('отгадайте', 5),
  imperfect: [],
};

perfectVerbs.set(отгадать.name.text, отгадать);

export { отгадать };