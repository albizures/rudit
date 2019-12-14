import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свихнуться: PerfectVerb = {
  name: Word('свихнуться', 5),
  singular1stPerson: Word('свихнусь', 5),
  singular2ndPerson: Word('свихнёшься', 5),
  singular3rdPerson: Word('свихнётся', 5),
  plural1stPerson: Word('свихнёмся', 5),
  plural2ndPerson: Word('свихнётесь', 5),
  plural3rdPerson: Word('свихнутся', 5),
  masculinePast: Word('свихнулся', 5),
  femininePast: Word('свихнулась', 5),
  neuterPast: Word('свихнулось', 5),
  pluralPast: Word('свихнулись', 5),
  imperativeInformal: Word('свихнись', 5),
  imperativeFormal: Word('свихнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(свихнуться.name.text, свихнуться);

export { свихнуться };