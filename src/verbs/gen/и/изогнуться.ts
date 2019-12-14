import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изогнуться: PerfectVerb = {
  name: Word('изогнуться', 5),
  singular1stPerson: Word('изогнусь', 5),
  singular2ndPerson: Word('изогнёшься', 5),
  singular3rdPerson: Word('изогнётся', 5),
  plural1stPerson: Word('изогнёмся', 5),
  plural2ndPerson: Word('изогнётесь', 5),
  plural3rdPerson: Word('изогнутся', 5),
  masculinePast: Word('изогнулся', 5),
  femininePast: Word('изогнулась', 5),
  neuterPast: Word('изогнулось', 5),
  pluralPast: Word('изогнулись', 5),
  imperativeInformal: Word('изогнись', 5),
  imperativeFormal: Word('изогнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(изогнуться.name.text, изогнуться);

export { изогнуться };