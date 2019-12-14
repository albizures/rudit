import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наткнуться: PerfectVerb = {
  name: Word('наткнуться', 5),
  singular1stPerson: Word('наткнусь', 5),
  singular2ndPerson: Word('наткнёшься', 5),
  singular3rdPerson: Word('наткнётся', 5),
  plural1stPerson: Word('наткнёмся', 5),
  plural2ndPerson: Word('наткнётесь', 5),
  plural3rdPerson: Word('наткнутся', 5),
  masculinePast: Word('наткнулся', 5),
  femininePast: Word('наткнулась', 5),
  neuterPast: Word('наткнулось', 5),
  pluralPast: Word('наткнулись', 5),
  imperativeInformal: Word('наткнись', 5),
  imperativeFormal: Word('наткнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(наткнуться.name.text, наткнуться);

export { наткнуться };