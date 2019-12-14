import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшатнуться: PerfectVerb = {
  name: Word('отшатнуться', 6),
  singular1stPerson: Word('отшатнусь', 6),
  singular2ndPerson: Word('отшатнёшься', 3),
  singular3rdPerson: Word('отшатнётся', 3),
  plural1stPerson: Word('отшатнёмся', 3),
  plural2ndPerson: Word('отшатнётесь', 3),
  plural3rdPerson: Word('отшатнутся', 6),
  masculinePast: Word('отшатнулся', 6),
  femininePast: Word('отшатнулась', 6),
  neuterPast: Word('отшатнулось', 6),
  pluralPast: Word('отшатнулись', 6),
  imperativeInformal: Word('отшатнись', 6),
  imperativeFormal: Word('отшатнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(отшатнуться.name.text, отшатнуться);

export { отшатнуться };