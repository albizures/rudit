import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рехнуться: PerfectVerb = {
  name: Word('рехнуться', 4),
  singular1stPerson: Word('рехнусь', 4),
  singular2ndPerson: Word('рехнёшься', 4),
  singular3rdPerson: Word('рехнётся', 4),
  plural1stPerson: Word('рехнёмся', 4),
  plural2ndPerson: Word('рехнётесь', 4),
  plural3rdPerson: Word('рехнутся', 4),
  masculinePast: Word('рехнулся', 4),
  femininePast: Word('рехнулась', 4),
  neuterPast: Word('рехнулось', 4),
  pluralPast: Word('рехнулись', 4),
  imperativeInformal: Word('рехнись', 4),
  imperativeFormal: Word('рехнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(рехнуться.name.text, рехнуться);

export { рехнуться };