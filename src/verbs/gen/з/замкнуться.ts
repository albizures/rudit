import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замкнуться: PerfectVerb = {
  name: Word('замкнуться', 5),
  singular1stPerson: Word('замкнусь', 5),
  singular2ndPerson: Word('замкнёшься', 1),
  singular3rdPerson: Word('замкнётся', 1),
  plural1stPerson: Word('замкнёмся', 1),
  plural2ndPerson: Word('замкнётесь', 1),
  plural3rdPerson: Word('замкнутся', 5),
  masculinePast: Word('замкнулся', 5),
  femininePast: Word('замкнулась', 5),
  neuterPast: Word('замкнулось', 5),
  pluralPast: Word('замкнулись', 5),
  imperativeInformal: Word('замкнись', 5),
  imperativeFormal: Word('замкнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(замкнуться.name.text, замкнуться);

export { замкнуться };