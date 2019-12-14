import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согнуться: PerfectVerb = {
  name: Word('согнуться', 4),
  singular1stPerson: Word('согнусь', 4),
  singular2ndPerson: Word('согнёшься', 4),
  singular3rdPerson: Word('согнётся', 4),
  plural1stPerson: Word('согнёмся', 4),
  plural2ndPerson: Word('согнётесь', 4),
  plural3rdPerson: Word('согнутся', 4),
  masculinePast: Word('согнулся', 4),
  femininePast: Word('согнулась', 4),
  neuterPast: Word('согнулось', 4),
  pluralPast: Word('согнулись', 4),
  imperativeInformal: Word('согнись', 4),
  imperativeFormal: Word('согнитесь', 4),
  imperfect: ['гнуться'],
};

perfectVerbs.set(согнуться.name.text, согнуться);

export { согнуться };