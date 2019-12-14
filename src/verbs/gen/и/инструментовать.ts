import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инструментовать: PerfectVerb = {
  name: Word('инструментовать', 12),
  singular1stPerson: Word('инструментую', 10),
  singular2ndPerson: Word('инструментуешь', 10),
  singular3rdPerson: Word('инструментует', 10),
  plural1stPerson: Word('инструментуем', 10),
  plural2ndPerson: Word('инструментуете', 10),
  plural3rdPerson: Word('инструментуют', 10),
  masculinePast: Word('инструментовал', 12),
  femininePast: Word('инструментовала', 12),
  neuterPast: Word('инструментовало', 12),
  pluralPast: Word('инструментовали', 12),
  imperativeInformal: Word('инструментуй', 10),
  imperativeFormal: Word('инструментуйте', 10),
  imperfect: [],
};

perfectVerbs.set(инструментовать.name.text, инструментовать);

export { инструментовать };