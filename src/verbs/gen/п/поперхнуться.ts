import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поперхнуться: PerfectVerb = {
  name: Word('поперхнуться', 7),
  singular1stPerson: Word('поперхнусь', 7),
  singular2ndPerson: Word('поперхнёшься', 3),
  singular3rdPerson: Word('поперхнётся', 3),
  plural1stPerson: Word('поперхнёмся', 3),
  plural2ndPerson: Word('поперхнётесь', 3),
  plural3rdPerson: Word('поперхнутся', 7),
  masculinePast: Word('поперхнулся', 7),
  femininePast: Word('поперхнулась', 7),
  neuterPast: Word('поперхнулось', 7),
  pluralPast: Word('поперхнулись', 7),
  imperativeInformal: Word('поперхнись', 7),
  imperativeFormal: Word('поперхнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(поперхнуться.name.text, поперхнуться);

export { поперхнуться };