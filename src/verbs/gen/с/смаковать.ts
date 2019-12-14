import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смаковать: PerfectVerb = {
  name: Word('смаковать', 6),
  singular1stPerson: Word('смакую', 4),
  singular2ndPerson: Word('смакуешь', 4),
  singular3rdPerson: Word('смакует', 4),
  plural1stPerson: Word('смакуем', 4),
  plural2ndPerson: Word('смакуете', 4),
  plural3rdPerson: Word('смакуют', 4),
  masculinePast: Word('смаковал', 6),
  femininePast: Word('смаковала', 6),
  neuterPast: Word('смаковало', 6),
  pluralPast: Word('смаковали', 6),
  imperativeInformal: Word('смакуй', 4),
  imperativeFormal: Word('смакуйте', 4),
  imperfect: [],
};

perfectVerbs.set(смаковать.name.text, смаковать);

export { смаковать };