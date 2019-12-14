import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухмыльнуться: PerfectVerb = {
  name: Word('ухмыльнуться', 7),
  singular1stPerson: Word('ухмыльнусь', 7),
  singular2ndPerson: Word('ухмыльнёшься', 11),
  singular3rdPerson: Word('ухмыльнётся', 10),
  plural1stPerson: Word('ухмыльнёмся', 10),
  plural2ndPerson: Word('ухмыльнётесь', 9),
  plural3rdPerson: Word('ухмыльнутся', 7),
  masculinePast: Word('ухмыльнулся', 7),
  femininePast: Word('ухмыльнулась', 7),
  neuterPast: Word('ухмыльнулось', 7),
  pluralPast: Word('ухмыльнулись', 7),
  imperativeInformal: Word('ухмыльнись', 7),
  imperativeFormal: Word('ухмыльнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(ухмыльнуться.name.text, ухмыльнуться);

export { ухмыльнуться };