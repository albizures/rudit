import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызваться: PerfectVerb = {
  name: Word('вызваться', 1),
  singular1stPerson: Word('вызовусь', 1),
  singular2ndPerson: Word('вызовешься', 1),
  singular3rdPerson: Word('вызовется', 1),
  plural1stPerson: Word('вызовемся', 1),
  plural2ndPerson: Word('вызоветесь', 1),
  plural3rdPerson: Word('вызовутся', 1),
  masculinePast: Word('вызвался', 1),
  femininePast: Word('вызвалась', 1),
  neuterPast: Word('вызвалось', 1),
  pluralPast: Word('вызвались', 1),
  imperativeInformal: Word('вызовись', 1),
  imperativeFormal: Word('вызовитесь', 1),
  imperfect: [],
};

perfectVerbs.set(вызваться.name.text, вызваться);

export { вызваться };