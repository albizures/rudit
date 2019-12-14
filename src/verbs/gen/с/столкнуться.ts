import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const столкнуться: PerfectVerb = {
  name: Word('столкнуться', 6),
  singular1stPerson: Word('столкнусь', 6),
  singular2ndPerson: Word('столкнёшься', 6),
  singular3rdPerson: Word('столкнётся', 6),
  plural1stPerson: Word('столкнёмся', 6),
  plural2ndPerson: Word('столкнётесь', 6),
  plural3rdPerson: Word('столкнутся', 6),
  masculinePast: Word('столкнулся', 6),
  femininePast: Word('столкнулась', 6),
  neuterPast: Word('столкнулось', 6),
  pluralPast: Word('столкнулись', 6),
  imperativeInformal: Word('столкнись', 6),
  imperativeFormal: Word('столкнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(столкнуться.name.text, столкнуться);

export { столкнуться };