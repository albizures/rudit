import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разладиться: PerfectVerb = {
  name: Word('разладиться', 4),
  singular1stPerson: Word('разлажусь', 4),
  singular2ndPerson: Word('разладишься', 4),
  singular3rdPerson: Word('разладится', 4),
  plural1stPerson: Word('разладимся', 4),
  plural2ndPerson: Word('разладитесь', 4),
  plural3rdPerson: Word('разладятся', 4),
  masculinePast: Word('разладился', 4),
  femininePast: Word('разладилась', 4),
  neuterPast: Word('разладилось', 4),
  pluralPast: Word('разладились', 4),
  imperativeInformal: Word('разладься', 4),
  imperativeFormal: Word('разладьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разладиться.name.text, разладиться);

export { разладиться };