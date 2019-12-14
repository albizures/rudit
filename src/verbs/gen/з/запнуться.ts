import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запнуться: PerfectVerb = {
  name: Word('запнуться', 4),
  singular1stPerson: Word('запнусь', 4),
  singular2ndPerson: Word('запнёшься', 1),
  singular3rdPerson: Word('запнётся', 1),
  plural1stPerson: Word('запнёмся', 1),
  plural2ndPerson: Word('запнётесь', 1),
  plural3rdPerson: Word('запнутся', 4),
  masculinePast: Word('запнулся', 4),
  femininePast: Word('запнулась', 4),
  neuterPast: Word('запнулось', 4),
  pluralPast: Word('запнулись', 4),
  imperativeInformal: Word('запнись', 4),
  imperativeFormal: Word('запнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(запнуться.name.text, запнуться);

export { запнуться };