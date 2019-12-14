import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загнуться: PerfectVerb = {
  name: Word('загнуться', 4),
  singular1stPerson: Word('загнусь', 4),
  singular2ndPerson: Word('загнёшься', 1),
  singular3rdPerson: Word('загнётся', 1),
  plural1stPerson: Word('загнёмся', 1),
  plural2ndPerson: Word('загнётесь', 1),
  plural3rdPerson: Word('загнутся', 4),
  masculinePast: Word('загнулся', 4),
  femininePast: Word('загнулась', 4),
  neuterPast: Word('загнулось', 4),
  pluralPast: Word('загнулись', 4),
  imperativeInformal: Word('загнись', 4),
  imperativeFormal: Word('загнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(загнуться.name.text, загнуться);

export { загнуться };