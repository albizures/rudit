import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const психовать: PerfectVerb = {
  name: Word('психовать', 6),
  singular1stPerson: Word('психую', 4),
  singular2ndPerson: Word('психуешь', 4),
  singular3rdPerson: Word('психует', 4),
  plural1stPerson: Word('психуем', 4),
  plural2ndPerson: Word('психуете', 4),
  plural3rdPerson: Word('психуют', 4),
  masculinePast: Word('психовал', 6),
  femininePast: Word('психовала', 6),
  neuterPast: Word('психовало', 6),
  pluralPast: Word('психовали', 6),
  imperativeInformal: Word('психуй', 4),
  imperativeFormal: Word('психуйте', 4),
  imperfect: [],
};

perfectVerbs.set(психовать.name.text, психовать);

export { психовать };