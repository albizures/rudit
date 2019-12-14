import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ткнуться: PerfectVerb = {
  name: Word('ткнуться', 3),
  singular1stPerson: Word('ткнусь', 3),
  singular2ndPerson: Word('ткнёшься', 3),
  singular3rdPerson: Word('ткнётся', 3),
  plural1stPerson: Word('ткнёмся', 3),
  plural2ndPerson: Word('ткнётесь', 3),
  plural3rdPerson: Word('ткнутся', 3),
  masculinePast: Word('ткнулся', 3),
  femininePast: Word('ткнулась', 3),
  neuterPast: Word('ткнулось', 3),
  pluralPast: Word('ткнулись', 3),
  imperativeInformal: Word('ткнись', 3),
  imperativeFormal: Word('ткнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(ткнуться.name.text, ткнуться);

export { ткнуться };