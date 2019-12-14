import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распахнуться: PerfectVerb = {
  name: Word('распахнуться', 7),
  singular1stPerson: Word('распахнусь', 7),
  singular2ndPerson: Word('распахнёшься', 1),
  singular3rdPerson: Word('распахнётся', 1),
  plural1stPerson: Word('распахнёмся', 1),
  plural2ndPerson: Word('распахнётесь', 1),
  plural3rdPerson: Word('распахнутся', 7),
  masculinePast: Word('распахнулся', 7),
  femininePast: Word('распахнулась', 7),
  neuterPast: Word('распахнулось', 7),
  pluralPast: Word('распахнулись', 7),
  imperativeInformal: Word('распахнись', 7),
  imperativeFormal: Word('распахнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(распахнуться.name.text, распахнуться);

export { распахнуться };