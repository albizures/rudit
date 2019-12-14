import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разогнуться: PerfectVerb = {
  name: Word('разогнуться', 6),
  singular1stPerson: Word('разогнусь', 6),
  singular2ndPerson: Word('разогнёшься', 1),
  singular3rdPerson: Word('разогнётся', 1),
  plural1stPerson: Word('разогнёмся', 1),
  plural2ndPerson: Word('разогнётесь', 1),
  plural3rdPerson: Word('разогнутся', 6),
  masculinePast: Word('разогнулся', 6),
  femininePast: Word('разогнулась', 6),
  neuterPast: Word('разогнулось', 6),
  pluralPast: Word('разогнулись', 6),
  imperativeInformal: Word('разогнись', 6),
  imperativeFormal: Word('разогнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разогнуться.name.text, разогнуться);

export { разогнуться };