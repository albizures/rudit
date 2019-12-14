import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересоздавать: PerfectVerb = {
  name: Word('пересоздавать', 10),
  singular1stPerson: Word('пересоздаю', 9),
  singular2ndPerson: Word('пересоздаёшь', 8),
  singular3rdPerson: Word('пересоздаёт', 8),
  plural1stPerson: Word('пересоздаём', 8),
  plural2ndPerson: Word('пересоздаёте', 8),
  plural3rdPerson: Word('пересоздают', 9),
  masculinePast: Word('пересоздавал', 10),
  femininePast: Word('пересоздавала', 10),
  neuterPast: Word('пересоздавало', 10),
  pluralPast: Word('пересоздавали', 10),
  imperativeInformal: Word('пересоздавай', 10),
  imperativeFormal: Word('пересоздавайте', 10),
  imperfect: [],
};

perfectVerbs.set(пересоздавать.name.text, пересоздавать);

export { пересоздавать };