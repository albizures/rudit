import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отогнуться: PerfectVerb = {
  name: Word('отогнуться', 5),
  singular1stPerson: Word('отогнусь', 5),
  singular2ndPerson: Word('отогнёшься', 0),
  singular3rdPerson: Word('отогнётся', 0),
  plural1stPerson: Word('отогнёмся', 0),
  plural2ndPerson: Word('отогнётесь', 7),
  plural3rdPerson: Word('отогнутся', 5),
  masculinePast: Word('отогнулся', 5),
  femininePast: Word('отогнулась', 5),
  neuterPast: Word('отогнулось', 5),
  pluralPast: Word('отогнулись', 5),
  imperativeInformal: Word('отогнись', 5),
  imperativeFormal: Word('отогнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отогнуться.name.text, отогнуться);

export { отогнуться };