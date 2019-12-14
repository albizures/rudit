import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлететься: PerfectVerb = {
  name: Word('разлететься', 6),
  singular1stPerson: Word('разлечусь', 6),
  singular2ndPerson: Word('разлетишься', 6),
  singular3rdPerson: Word('разлетится', 6),
  plural1stPerson: Word('разлетимся', 6),
  plural2ndPerson: Word('разлетитесь', 6),
  plural3rdPerson: Word('разлетятся', 6),
  masculinePast: Word('разлетелся', 6),
  femininePast: Word('разлетелась', 6),
  neuterPast: Word('разлетелось', 6),
  pluralPast: Word('разлетелись', 6),
  imperativeInformal: Word('разлетись', 6),
  imperativeFormal: Word('разлетитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разлететься.name.text, разлететься);

export { разлететься };