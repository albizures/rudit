import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запаковать: PerfectVerb = {
  name: Word('запаковать', 7),
  singular1stPerson: Word('запакую', 5),
  singular2ndPerson: Word('запакуешь', 5),
  singular3rdPerson: Word('запакует', 5),
  plural1stPerson: Word('запакуем', 5),
  plural2ndPerson: Word('запакуете', 5),
  plural3rdPerson: Word('запакуют', 5),
  masculinePast: Word('запаковал', 7),
  femininePast: Word('запаковала', 7),
  neuterPast: Word('запаковало', 7),
  pluralPast: Word('запаковали', 7),
  imperativeInformal: Word('запакуй', 5),
  imperativeFormal: Word('запакуйте', 5),
  imperfect: [],
};

perfectVerbs.set(запаковать.name.text, запаковать);

export { запаковать };