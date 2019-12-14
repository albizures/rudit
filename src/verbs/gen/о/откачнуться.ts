import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откачнуться: PerfectVerb = {
  name: Word('откачнуться', 6),
  singular1stPerson: Word('откачнусь', 6),
  singular2ndPerson: Word('откачнёшься', 3),
  singular3rdPerson: Word('откачнётся', 3),
  plural1stPerson: Word('откачнёмся', 3),
  plural2ndPerson: Word('откачнётесь', 3),
  plural3rdPerson: Word('откачнутся', 6),
  masculinePast: Word('откачнулся', 6),
  femininePast: Word('откачнулась', 6),
  neuterPast: Word('откачнулось', 6),
  pluralPast: Word('откачнулись', 6),
  imperativeInformal: Word('откачнись', 6),
  imperativeFormal: Word('откачнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(откачнуться.name.text, откачнуться);

export { откачнуться };