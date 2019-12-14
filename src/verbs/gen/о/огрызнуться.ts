import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огрызнуться: PerfectVerb = {
  name: Word('огрызнуться', 6),
  singular1stPerson: Word('огрызнусь', 6),
  singular2ndPerson: Word('огрызнёшься', 6),
  singular3rdPerson: Word('огрызнётся', 6),
  plural1stPerson: Word('огрызнёмся', 6),
  plural2ndPerson: Word('огрызнётесь', 6),
  plural3rdPerson: Word('огрызнутся', 6),
  masculinePast: Word('огрызнулся', 6),
  femininePast: Word('огрызнулась', 6),
  neuterPast: Word('огрызнулось', 6),
  pluralPast: Word('огрызнулись', 6),
  imperativeInformal: Word('огрызнись', 6),
  imperativeFormal: Word('огрызнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(огрызнуться.name.text, огрызнуться);

export { огрызнуться };