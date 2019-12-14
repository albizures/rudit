import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const качнуться: PerfectVerb = {
  name: Word('качнуться', 4),
  singular1stPerson: Word('качнусь', 4),
  singular2ndPerson: Word('качнёшься', 4),
  singular3rdPerson: Word('качнётся', 4),
  plural1stPerson: Word('качнёмся', 4),
  plural2ndPerson: Word('качнётесь', 4),
  plural3rdPerson: Word('качнутся', 4),
  masculinePast: Word('качнулся', 4),
  femininePast: Word('качнулась', 4),
  neuterPast: Word('качнулось', 4),
  pluralPast: Word('качнулись', 4),
  imperativeInformal: Word('качнись', 4),
  imperativeFormal: Word('качнитесь', 4),
  imperfect: ['качаться'],
};

perfectVerbs.set(качнуться.name.text, качнуться);

export { качнуться };