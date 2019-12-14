import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шатнуться: PerfectVerb = {
  name: Word('шатнуться', 4),
  singular1stPerson: Word('шатнусь', 4),
  singular2ndPerson: Word('шатнёшься', 4),
  singular3rdPerson: Word('шатнётся', 4),
  plural1stPerson: Word('шатнёмся', 4),
  plural2ndPerson: Word('шатнётесь', 4),
  plural3rdPerson: Word('шатнутся', 4),
  masculinePast: Word('шатнулся', 4),
  femininePast: Word('шатнулась', 4),
  neuterPast: Word('шатнулось', 4),
  pluralPast: Word('шатнулись', 4),
  imperativeInformal: Word('шатнись', 4),
  imperativeFormal: Word('шатнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(шатнуться.name.text, шатнуться);

export { шатнуться };