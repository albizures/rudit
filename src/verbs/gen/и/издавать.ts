import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const издавать: PerfectVerb = {
  name: Word('издавать', 5),
  singular1stPerson: Word('издаю', 4),
  singular2ndPerson: Word('издаёшь', 3),
  singular3rdPerson: Word('издаёт', 3),
  plural1stPerson: Word('издаём', 3),
  plural2ndPerson: Word('издаёте', 3),
  plural3rdPerson: Word('издают', 4),
  masculinePast: Word('издавал', 5),
  femininePast: Word('издавала', 5),
  neuterPast: Word('издавало', 5),
  pluralPast: Word('издавали', 5),
  imperativeInformal: Word('издавай', 5),
  imperativeFormal: Word('издавайте', 5),
  imperfect: ['издать'],
};

perfectVerbs.set(издавать.name.text, издавать);

export { издавать };