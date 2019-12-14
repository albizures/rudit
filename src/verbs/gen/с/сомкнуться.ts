import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сомкнуться: PerfectVerb = {
  name: Word('сомкнуться', 5),
  singular1stPerson: Word('сомкнусь', 5),
  singular2ndPerson: Word('сомкнёшься', 1),
  singular3rdPerson: Word('сомкнётся', 1),
  plural1stPerson: Word('сомкнёмся', 1),
  plural2ndPerson: Word('сомкнётесь', 7),
  plural3rdPerson: Word('сомкнутся', 5),
  masculinePast: Word('сомкнулся', 5),
  femininePast: Word('сомкнулась', 5),
  neuterPast: Word('сомкнулось', 5),
  pluralPast: Word('сомкнулись', 5),
  imperativeInformal: Word('сомкнись', 5),
  imperativeFormal: Word('сомкнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(сомкнуться.name.text, сомкнуться);

export { сомкнуться };