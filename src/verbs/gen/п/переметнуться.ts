import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переметнуться: PerfectVerb = {
  name: Word('переметнуться', 8),
  singular1stPerson: Word('переметнусь', 8),
  singular2ndPerson: Word('переметнёшься', 8),
  singular3rdPerson: Word('переметнётся', 8),
  plural1stPerson: Word('переметнёмся', 8),
  plural2ndPerson: Word('переметнётесь', 8),
  plural3rdPerson: Word('переметнутся', 8),
  masculinePast: Word('переметнулся', 8),
  femininePast: Word('переметнулась', 8),
  neuterPast: Word('переметнулось', 8),
  pluralPast: Word('переметнулись', 8),
  imperativeInformal: Word('переметнись', 8),
  imperativeFormal: Word('переметнитесь', 8),
  imperfect: [],
};

perfectVerbs.set(переметнуться.name.text, переметнуться);

export { переметнуться };