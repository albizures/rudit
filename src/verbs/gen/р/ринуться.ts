import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ринуться: PerfectVerb = {
  name: Word('ринуться', 1),
  singular1stPerson: Word('ринусь', 1),
  singular2ndPerson: Word('ринешься', 1),
  singular3rdPerson: Word('ринется', 1),
  plural1stPerson: Word('ринемся', 1),
  plural2ndPerson: Word('ринетесь', 1),
  plural3rdPerson: Word('ринутся', 1),
  masculinePast: Word('ринулся', 1),
  femininePast: Word('ринулась', 1),
  neuterPast: Word('ринулось', 1),
  pluralPast: Word('ринулись', 1),
  imperativeInformal: Word('ринься', 1),
  imperativeFormal: Word('риньтесь', 1),
  imperfect: [],
};

perfectVerbs.set(ринуться.name.text, ринуться);

export { ринуться };