import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облизнуться: PerfectVerb = {
  name: Word('облизнуться', 6),
  singular1stPerson: Word('облизнусь', 6),
  singular2ndPerson: Word('облизнёшься', 3),
  singular3rdPerson: Word('облизнётся', 3),
  plural1stPerson: Word('облизнёмся', 3),
  plural2ndPerson: Word('облизнётесь', 8),
  plural3rdPerson: Word('облизнутся', 6),
  masculinePast: Word('облизнулся', 6),
  femininePast: Word('облизнулась', 6),
  neuterPast: Word('облизнулось', 6),
  pluralPast: Word('облизнулись', 6),
  imperativeInformal: Word('облизнись', 6),
  imperativeFormal: Word('облизнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(облизнуться.name.text, облизнуться);

export { облизнуться };