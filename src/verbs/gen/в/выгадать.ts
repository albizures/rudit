import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгадать: PerfectVerb = {
  name: Word('выгадать', 1),
  singular1stPerson: Word('выгадаю', 1),
  singular2ndPerson: Word('выгадаешь', 1),
  singular3rdPerson: Word('выгадает', 1),
  plural1stPerson: Word('выгадаем', 1),
  plural2ndPerson: Word('выгадаете', 1),
  plural3rdPerson: Word('выгадают', 1),
  masculinePast: Word('выгадал', 1),
  femininePast: Word('выгадала', 1),
  neuterPast: Word('выгадало', 1),
  pluralPast: Word('выгадали', 1),
  imperativeInformal: Word('выгадай', 1),
  imperativeFormal: Word('выгадайте', 1),
  imperfect: [],
};

perfectVerbs.set(выгадать.name.text, выгадать);

export { выгадать };