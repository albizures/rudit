import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воткнуться: PerfectVerb = {
  name: Word('воткнуться', 5),
  singular1stPerson: Word('воткнусь', 5),
  singular2ndPerson: Word('воткнёшься', 5),
  singular3rdPerson: Word('воткнётся', 5),
  plural1stPerson: Word('воткнёмся', 5),
  plural2ndPerson: Word('воткнётесь', 5),
  plural3rdPerson: Word('воткнутся', 5),
  masculinePast: Word('воткнулся', 5),
  femininePast: Word('воткнулась', 5),
  neuterPast: Word('воткнулось', 5),
  pluralPast: Word('воткнулись', 5),
  imperativeInformal: Word('воткнись', 5),
  imperativeFormal: Word('воткнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(воткнуться.name.text, воткнуться);

export { воткнуться };