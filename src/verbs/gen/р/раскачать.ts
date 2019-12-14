import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскачать: PerfectVerb = {
  name: Word('раскачать', 6),
  singular1stPerson: Word('раскачаю', 6),
  singular2ndPerson: Word('раскачаешь', 6),
  singular3rdPerson: Word('раскачает', 6),
  plural1stPerson: Word('раскачаем', 6),
  plural2ndPerson: Word('раскачаете', 6),
  plural3rdPerson: Word('раскачают', 6),
  masculinePast: Word('раскачал', 6),
  femininePast: Word('раскачала', 6),
  neuterPast: Word('раскачало', 6),
  pluralPast: Word('раскачали', 6),
  imperativeInformal: Word('раскачай', 6),
  imperativeFormal: Word('раскачайте', 6),
  imperfect: [],
};

perfectVerbs.set(раскачать.name.text, раскачать);

export { раскачать };