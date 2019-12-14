import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскармливать: PerfectVerb = {
  name: Word('раскармливать', 4),
  singular1stPerson: Word('раскармливаю', 4),
  singular2ndPerson: Word('раскармливаешь', 4),
  singular3rdPerson: Word('раскармливает', 4),
  plural1stPerson: Word('раскармливаем', 4),
  plural2ndPerson: Word('раскармливаете', 4),
  plural3rdPerson: Word('раскармливают', 4),
  masculinePast: Word('раскармливал', 4),
  femininePast: Word('раскармливала', 4),
  neuterPast: Word('раскармливало', 4),
  pluralPast: Word('раскармливали', 4),
  imperativeInformal: Word('раскармливай', 4),
  imperativeFormal: Word('раскармливайте', 4),
  imperfect: [],
};

perfectVerbs.set(раскармливать.name.text, раскармливать);

export { раскармливать };