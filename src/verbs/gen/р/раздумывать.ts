import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздумывать: PerfectVerb = {
  name: Word('раздумывать', 4),
  singular1stPerson: Word('раздумываю', 4),
  singular2ndPerson: Word('раздумываешь', 4),
  singular3rdPerson: Word('раздумывает', 4),
  plural1stPerson: Word('раздумываем', 4),
  plural2ndPerson: Word('раздумываете', 4),
  plural3rdPerson: Word('раздумывают', 4),
  masculinePast: Word('раздумывал', 4),
  femininePast: Word('раздумывала', 4),
  neuterPast: Word('раздумывало', 4),
  pluralPast: Word('раздумывали', 4),
  imperativeInformal: Word('раздумывай', 4),
  imperativeFormal: Word('раздумывайте', 4),
  imperfect: [],
};

perfectVerbs.set(раздумывать.name.text, раздумывать);

export { раздумывать };