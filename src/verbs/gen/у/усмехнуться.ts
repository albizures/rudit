import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усмехнуться: PerfectVerb = {
  name: Word('усмехнуться', 6),
  singular1stPerson: Word('усмехнусь', 6),
  singular2ndPerson: Word('усмехнёшься', 3),
  singular3rdPerson: Word('усмехнётся', 3),
  plural1stPerson: Word('усмехнёмся', 3),
  plural2ndPerson: Word('усмехнётесь', 3),
  plural3rdPerson: Word('усмехнутся', 6),
  masculinePast: Word('усмехнулся', 6),
  femininePast: Word('усмехнулась', 6),
  neuterPast: Word('усмехнулось', 6),
  pluralPast: Word('усмехнулись', 6),
  imperativeInformal: Word('усмехнись', 6),
  imperativeFormal: Word('усмехнитесь', 6),
  imperfect: ['усмехаться'],
};

perfectVerbs.set(усмехнуться.name.text, усмехнуться);

export { усмехнуться };