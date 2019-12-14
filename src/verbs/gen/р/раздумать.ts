import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздумать: PerfectVerb = {
  name: Word('раздумать', 4),
  singular1stPerson: Word('раздумаю', 4),
  singular2ndPerson: Word('раздумаешь', 4),
  singular3rdPerson: Word('раздумает', 4),
  plural1stPerson: Word('раздумаем', 4),
  plural2ndPerson: Word('раздумаете', 4),
  plural3rdPerson: Word('раздумают', 4),
  masculinePast: Word('раздумал', 4),
  femininePast: Word('раздумала', 4),
  neuterPast: Word('раздумало', 4),
  pluralPast: Word('раздумали', 4),
  imperativeInformal: Word('раздумай', 4),
  imperativeFormal: Word('раздумайте', 4),
  imperfect: [],
};

perfectVerbs.set(раздумать.name.text, раздумать);

export { раздумать };