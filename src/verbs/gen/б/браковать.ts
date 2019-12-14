import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const браковать: PerfectVerb = {
  name: Word('браковать', 6),
  singular1stPerson: Word('бракую', 4),
  singular2ndPerson: Word('бракуешь', 4),
  singular3rdPerson: Word('бракует', 4),
  plural1stPerson: Word('бракуем', 4),
  plural2ndPerson: Word('бракуете', 4),
  plural3rdPerson: Word('бракуют', 4),
  masculinePast: Word('браковал', 6),
  femininePast: Word('браковала', 6),
  neuterPast: Word('браковало', 6),
  pluralPast: Word('браковали', 6),
  imperativeInformal: Word('бракуй', 4),
  imperativeFormal: Word('бракуйте', 4),
  imperfect: [],
};

perfectVerbs.set(браковать.name.text, браковать);

export { браковать };