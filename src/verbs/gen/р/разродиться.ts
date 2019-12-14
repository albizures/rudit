import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разродиться: PerfectVerb = {
  name: Word('разродиться', 6),
  singular1stPerson: Word('разрожусь', 6),
  singular2ndPerson: Word('разродишься', 6),
  singular3rdPerson: Word('разродится', 6),
  plural1stPerson: Word('разродимся', 6),
  plural2ndPerson: Word('разродитесь', 6),
  plural3rdPerson: Word('разродятся', 6),
  masculinePast: Word('разродился', 6),
  femininePast: Word('разродилась', 6),
  neuterPast: Word('разродилось', 6),
  pluralPast: Word('разродились', 6),
  imperativeInformal: Word('разродись', 6),
  imperativeFormal: Word('разродитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разродиться.name.text, разродиться);

export { разродиться };