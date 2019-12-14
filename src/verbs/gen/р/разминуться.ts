import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разминуться: PerfectVerb = {
  name: Word('разминуться', 6),
  singular1stPerson: Word('разминусь', 6),
  singular2ndPerson: Word('разминёшься', 6),
  singular3rdPerson: Word('разминётся', 6),
  plural1stPerson: Word('разминёмся', 6),
  plural2ndPerson: Word('разминётесь', 6),
  plural3rdPerson: Word('разминутся', 6),
  masculinePast: Word('разминулся', 6),
  femininePast: Word('разминулась', 6),
  neuterPast: Word('разминулось', 6),
  pluralPast: Word('разминулись', 6),
  imperativeInformal: Word('разминись', 6),
  imperativeFormal: Word('разминитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разминуться.name.text, разминуться);

export { разминуться };