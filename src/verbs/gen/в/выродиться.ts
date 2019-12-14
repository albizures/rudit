import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выродиться: PerfectVerb = {
  name: Word('выродиться', 1),
  singular1stPerson: Word('вырожусь', 1),
  singular2ndPerson: Word('выродишься', 1),
  singular3rdPerson: Word('выродится', 1),
  plural1stPerson: Word('выродимся', 1),
  plural2ndPerson: Word('выродитесь', 1),
  plural3rdPerson: Word('выродятся', 1),
  masculinePast: Word('выродился', 1),
  femininePast: Word('выродилась', 1),
  neuterPast: Word('выродилось', 1),
  pluralPast: Word('выродились', 1),
  imperativeInformal: Word('выродись', 1),
  imperativeFormal: Word('выродитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выродиться.name.text, выродиться);

export { выродиться };