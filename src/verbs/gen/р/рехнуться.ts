import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рехнуться: PerfectVerb = {
  name: Word('рехнуться', 4),
  singular1stPerson: Word('рехнусь', 4),
  singular2ndPerson: Word('рехнёшься', 1),
  singular3rdPerson: Word('рехнётся', 1),
  plural1stPerson: Word('рехнёмся', 1),
  plural2ndPerson: Word('рехнётесь', 1),
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