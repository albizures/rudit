import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ругнуться: PerfectVerb = {
  name: Word('ругнуться', 4),
  singular1stPerson: Word('ругнусь', 4),
  singular2ndPerson: Word('ругнёшься', 8),
  singular3rdPerson: Word('ругнётся', 7),
  plural1stPerson: Word('ругнёмся', 7),
  plural2ndPerson: Word('ругнётесь', 6),
  plural3rdPerson: Word('ругнутся', 4),
  masculinePast: Word('ругнулся', 4),
  femininePast: Word('ругнулась', 4),
  neuterPast: Word('ругнулось', 4),
  pluralPast: Word('ругнулись', 4),
  imperativeInformal: Word('ругнись', 4),
  imperativeFormal: Word('ругнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(ругнуться.name.text, ругнуться);

export { ругнуться };