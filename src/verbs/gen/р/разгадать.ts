import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгадать: PerfectVerb = {
  name: Word('разгадать', 6),
  singular1stPerson: Word('разгадаю', 6),
  singular2ndPerson: Word('разгадаешь', 6),
  singular3rdPerson: Word('разгадает', 6),
  plural1stPerson: Word('разгадаем', 6),
  plural2ndPerson: Word('разгадаете', 6),
  plural3rdPerson: Word('разгадают', 6),
  masculinePast: Word('разгадал', 6),
  femininePast: Word('разгадала', 6),
  neuterPast: Word('разгадало', 6),
  pluralPast: Word('разгадали', 6),
  imperativeInformal: Word('разгадай', 6),
  imperativeFormal: Word('разгадайте', 6),
  imperfect: [],
};

perfectVerbs.set(разгадать.name.text, разгадать);

export { разгадать };