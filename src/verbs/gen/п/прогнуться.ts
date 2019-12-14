import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогнуться: PerfectVerb = {
  name: Word('прогнуться', 5),
  singular1stPerson: Word('прогнусь', 5),
  singular2ndPerson: Word('прогнёшься', 2),
  singular3rdPerson: Word('прогнётся', 2),
  plural1stPerson: Word('прогнёмся', 2),
  plural2ndPerson: Word('прогнётесь', 7),
  plural3rdPerson: Word('прогнутся', 5),
  masculinePast: Word('прогнулся', 5),
  femininePast: Word('прогнулась', 5),
  neuterPast: Word('прогнулось', 5),
  pluralPast: Word('прогнулись', 5),
  imperativeInformal: Word('прогнись', 5),
  imperativeFormal: Word('прогнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(прогнуться.name.text, прогнуться);

export { прогнуться };