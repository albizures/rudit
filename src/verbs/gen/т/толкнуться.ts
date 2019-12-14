import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const толкнуться: PerfectVerb = {
  name: Word('толкнуться', 5),
  singular1stPerson: Word('толкнусь', 5),
  singular2ndPerson: Word('толкнёшься', 5),
  singular3rdPerson: Word('толкнётся', 5),
  plural1stPerson: Word('толкнёмся', 5),
  plural2ndPerson: Word('толкнётесь', 5),
  plural3rdPerson: Word('толкнутся', 5),
  masculinePast: Word('толкнулся', 5),
  femininePast: Word('толкнулась', 5),
  neuterPast: Word('толкнулось', 5),
  pluralPast: Word('толкнулись', 5),
  imperativeInformal: Word('толкнись', 5),
  imperativeFormal: Word('толкнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(толкнуться.name.text, толкнуться);

export { толкнуться };