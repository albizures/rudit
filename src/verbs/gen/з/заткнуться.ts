import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заткнуться: PerfectVerb = {
  name: Word('заткнуться', 5),
  singular1stPerson: Word('заткнусь', 5),
  singular2ndPerson: Word('заткнёшься', 5),
  singular3rdPerson: Word('заткнётся', 5),
  plural1stPerson: Word('заткнёмся', 5),
  plural2ndPerson: Word('заткнётесь', 5),
  plural3rdPerson: Word('заткнутся', 5),
  masculinePast: Word('заткнулся', 5),
  femininePast: Word('заткнулась', 5),
  neuterPast: Word('заткнулось', 5),
  pluralPast: Word('заткнулись', 5),
  imperativeInformal: Word('заткнись', 5),
  imperativeFormal: Word('заткнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(заткнуться.name.text, заткнуться);

export { заткнуться };