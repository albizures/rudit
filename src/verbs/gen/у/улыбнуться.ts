import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улыбнуться: PerfectVerb = {
  name: Word('улыбнуться', 5),
  singular1stPerson: Word('улыбнусь', 5),
  singular2ndPerson: Word('улыбнёшься', 9),
  singular3rdPerson: Word('улыбнётся', 8),
  plural1stPerson: Word('улыбнёмся', 8),
  plural2ndPerson: Word('улыбнётесь', 7),
  plural3rdPerson: Word('улыбнутся', 5),
  masculinePast: Word('улыбнулся', 5),
  femininePast: Word('улыбнулась', 5),
  neuterPast: Word('улыбнулось', 5),
  pluralPast: Word('улыбнулись', 5),
  imperativeInformal: Word('улыбнись', 5),
  imperativeFormal: Word('улыбнитесь', 5),
  imperfect: ['улыбаться'],
};

perfectVerbs.set(улыбнуться.name.text, улыбнуться);

export { улыбнуться };