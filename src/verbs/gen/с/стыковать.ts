import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стыковать: PerfectVerb = {
  name: Word('стыковать', 6),
  singular1stPerson: Word('стыкую', 4),
  singular2ndPerson: Word('стыкуешь', 4),
  singular3rdPerson: Word('стыкует', 4),
  plural1stPerson: Word('стыкуем', 4),
  plural2ndPerson: Word('стыкуете', 4),
  plural3rdPerson: Word('стыкуют', 4),
  masculinePast: Word('стыковал', 6),
  femininePast: Word('стыковала', 6),
  neuterPast: Word('стыковало', 6),
  pluralPast: Word('стыковали', 6),
  imperativeInformal: Word('стыкуй', 4),
  imperativeFormal: Word('стыкуйте', 4),
  imperfect: [],
};

perfectVerbs.set(стыковать.name.text, стыковать);

export { стыковать };