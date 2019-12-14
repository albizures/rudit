import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рапортовать: PerfectVerb = {
  name: Word('рапортовать', 8),
  singular1stPerson: Word('рапортую', 6),
  singular2ndPerson: Word('рапортуешь', 6),
  singular3rdPerson: Word('рапортует', 6),
  plural1stPerson: Word('рапортуем', 6),
  plural2ndPerson: Word('рапортуете', 6),
  plural3rdPerson: Word('рапортуют', 6),
  masculinePast: Word('рапортовал', 8),
  femininePast: Word('рапортовала', 8),
  neuterPast: Word('рапортовало', 8),
  pluralPast: Word('рапортовали', 8),
  imperativeInformal: Word('рапортуй', 6),
  imperativeFormal: Word('рапортуйте', 6),
  imperfect: [],
};

perfectVerbs.set(рапортовать.name.text, рапортовать);

export { рапортовать };