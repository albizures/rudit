import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промахнуться: PerfectVerb = {
  name: Word('промахнуться', 7),
  singular1stPerson: Word('промахнусь', 7),
  singular2ndPerson: Word('промахнёшься', 4),
  singular3rdPerson: Word('промахнётся', 4),
  plural1stPerson: Word('промахнёмся', 4),
  plural2ndPerson: Word('промахнётесь', 4),
  plural3rdPerson: Word('промахнутся', 7),
  masculinePast: Word('промахнулся', 7),
  femininePast: Word('промахнулась', 7),
  neuterPast: Word('промахнулось', 7),
  pluralPast: Word('промахнулись', 7),
  imperativeInformal: Word('промахнись', 7),
  imperativeFormal: Word('промахнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(промахнуться.name.text, промахнуться);

export { промахнуться };