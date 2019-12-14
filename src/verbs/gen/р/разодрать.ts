import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разодрать: PerfectVerb = {
  name: Word('разодрать', 6),
  singular1stPerson: Word('раздеру', 6),
  singular2ndPerson: Word('раздерёшь', 6),
  singular3rdPerson: Word('раздерёт', 6),
  plural1stPerson: Word('раздерём', 6),
  plural2ndPerson: Word('раздерёте', 6),
  plural3rdPerson: Word('раздерут', 6),
  masculinePast: Word('разодрал', 6),
  femininePast: Word('разодрала', 8),
  neuterPast: Word('разодрало', 6),
  pluralPast: Word('разодрали', 6),
  imperativeInformal: Word('раздери', 6),
  imperativeFormal: Word('раздерите', 6),
  imperfect: [],
};

perfectVerbs.set(разодрать.name.text, разодрать);

export { разодрать };