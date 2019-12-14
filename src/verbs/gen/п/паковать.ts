import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const паковать: PerfectVerb = {
  name: Word('паковать', 5),
  singular1stPerson: Word('пакую', 3),
  singular2ndPerson: Word('пакуешь', 3),
  singular3rdPerson: Word('пакует', 3),
  plural1stPerson: Word('пакуем', 3),
  plural2ndPerson: Word('пакуете', 3),
  plural3rdPerson: Word('пакуют', 3),
  masculinePast: Word('паковал', 5),
  femininePast: Word('паковала', 5),
  neuterPast: Word('паковало', 5),
  pluralPast: Word('паковали', 5),
  imperativeInformal: Word('пакуй', 3),
  imperativeFormal: Word('пакуйте', 3),
  imperfect: [],
};

perfectVerbs.set(паковать.name.text, паковать);

export { паковать };