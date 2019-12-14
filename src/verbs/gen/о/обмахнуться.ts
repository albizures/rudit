import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмахнуться: PerfectVerb = {
  name: Word('обмахнуться', 6),
  singular1stPerson: Word('обмахнусь', 6),
  singular2ndPerson: Word('обмахнёшься', 3),
  singular3rdPerson: Word('обмахнётся', 3),
  plural1stPerson: Word('обмахнёмся', 3),
  plural2ndPerson: Word('обмахнётесь', 3),
  plural3rdPerson: Word('обмахнутся', 6),
  masculinePast: Word('обмахнулся', 6),
  femininePast: Word('обмахнулась', 6),
  neuterPast: Word('обмахнулось', 6),
  pluralPast: Word('обмахнулись', 6),
  imperativeInformal: Word('обмахнись', 6),
  imperativeFormal: Word('обмахнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(обмахнуться.name.text, обмахнуться);

export { обмахнуться };