import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воткнуться: PerfectVerb = {
  name: Word('воткнуться', 5),
  singular1stPerson: Word('воткнусь', 5),
  singular2ndPerson: Word('воткнёшься', 1),
  singular3rdPerson: Word('воткнётся', 1),
  plural1stPerson: Word('воткнёмся', 1),
  plural2ndPerson: Word('воткнётесь', 7),
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