import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шевельнуться: PerfectVerb = {
  name: Word('шевельнуться', 7),
  singular1stPerson: Word('шевельнусь', 7),
  singular2ndPerson: Word('шевельнёшься', 1),
  singular3rdPerson: Word('шевельнётся', 1),
  plural1stPerson: Word('шевельнёмся', 1),
  plural2ndPerson: Word('шевельнётесь', 1),
  plural3rdPerson: Word('шевельнутся', 7),
  masculinePast: Word('шевельнулся', 7),
  femininePast: Word('шевельнулась', 7),
  neuterPast: Word('шевельнулось', 7),
  pluralPast: Word('шевельнулись', 7),
  imperativeInformal: Word('шевельнись', 7),
  imperativeFormal: Word('шевельнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(шевельнуться.name.text, шевельнуться);

export { шевельнуться };