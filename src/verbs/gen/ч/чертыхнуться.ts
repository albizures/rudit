import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чертыхнуться: PerfectVerb = {
  name: Word('чертыхнуться', 7),
  singular1stPerson: Word('чертыхнусь', 7),
  singular2ndPerson: Word('чертыхнёшься', 1),
  singular3rdPerson: Word('чертыхнётся', 1),
  plural1stPerson: Word('чертыхнёмся', 1),
  plural2ndPerson: Word('чертыхнётесь', 1),
  plural3rdPerson: Word('чертыхнутся', 7),
  masculinePast: Word('чертыхнулся', 7),
  femininePast: Word('чертыхнулась', 7),
  neuterPast: Word('чертыхнулось', 7),
  pluralPast: Word('чертыхнулись', 7),
  imperativeInformal: Word('чертыхнись', 7),
  imperativeFormal: Word('чертыхнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(чертыхнуться.name.text, чертыхнуться);

export { чертыхнуться };