import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздолбать: PerfectVerb = {
  name: Word('раздолбать', 7),
  singular1stPerson: Word('раздолбаю', 7),
  singular2ndPerson: Word('раздолбаешь', 7),
  singular3rdPerson: Word('раздолбает', 7),
  plural1stPerson: Word('раздолбаем', 7),
  plural2ndPerson: Word('раздолбаете', 7),
  plural3rdPerson: Word('раздолбают', 7),
  masculinePast: Word('раздолбал', 7),
  femininePast: Word('раздолбала', 7),
  neuterPast: Word('раздолбало', 7),
  pluralPast: Word('раздолбали', 7),
  imperativeInformal: Word('раздолбай', 7),
  imperativeFormal: Word('раздолбайте', 7),
  imperfect: [],
};

perfectVerbs.set(раздолбать.name.text, раздолбать);

export { раздолбать };