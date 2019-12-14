import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагнуться: PerfectVerb = {
  name: Word('нагнуться', 4),
  singular1stPerson: Word('нагнусь', 4),
  singular2ndPerson: Word('нагнёшься', 1),
  singular3rdPerson: Word('нагнётся', 1),
  plural1stPerson: Word('нагнёмся', 1),
  plural2ndPerson: Word('нагнётесь', 1),
  plural3rdPerson: Word('нагнутся', 4),
  masculinePast: Word('нагнулся', 4),
  femininePast: Word('нагнулась', 4),
  neuterPast: Word('нагнулось', 4),
  pluralPast: Word('нагнулись', 4),
  imperativeInformal: Word('нагнись', 4),
  imperativeFormal: Word('нагнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(нагнуться.name.text, нагнуться);

export { нагнуться };