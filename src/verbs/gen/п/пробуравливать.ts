import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробуравливать: PerfectVerb = {
  name: Word('пробуравливать', 6),
  singular1stPerson: Word('пробуравливаю', 6),
  singular2ndPerson: Word('пробуравливаешь', 6),
  singular3rdPerson: Word('пробуравливает', 6),
  plural1stPerson: Word('пробуравливаем', 6),
  plural2ndPerson: Word('пробуравливаете', 6),
  plural3rdPerson: Word('пробуравливают', 6),
  masculinePast: Word('пробуравливал', 6),
  femininePast: Word('пробуравливала', 6),
  neuterPast: Word('пробуравливало', 6),
  pluralPast: Word('пробуравливали', 6),
  imperativeInformal: Word('пробуравливай', 6),
  imperativeFormal: Word('пробуравливайте', 6),
  imperfect: [],
};

perfectVerbs.set(пробуравливать.name.text, пробуравливать);

export { пробуравливать };